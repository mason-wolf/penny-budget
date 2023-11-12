import { DatePipe, formatCurrency, formatDate } from '@angular/common';
import { Component, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../shared/models/budget.model';
import { Category } from '../shared/models/category.model';
import { Transaction } from '../shared/models/transaction.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: string;
  userId: string;
  balance: string;
  accountName: string;
  amountEarned: string;
  amountSpent: string;
  date = new Date();
  month: number;
  year: number;
  transactions: Transaction[] = [];
  budgetItems: Budget[] = [];
  noBudget: boolean = false;
  loadingBudget: boolean = false;
  errorMessage: string;

  // Income form fields
  incomeAmount: number;
  incomeDate: string;
  incomeForm: FormGroup;

  // Transaction form fields
  transactionAmount: number;
  transactionDate: string;
  transactionCategory: Category;
  transactionForm: FormGroup;

  // Category form fields
  categoryName: string;
  categoryToRemove: Category;
  categories : Category[] = [];


  @ViewChild('addIncomeDialog') addIncomeDialog: TemplateRef<any>;
  @ViewChild('addTransactionDialog') addTransactionDialog: TemplateRef<any>;
  @ViewChild('manageCategoryDialog') manageCategoryDialog: TemplateRef<any>;

  constructor(
    private budgetService: BudgetService,
    private accountService: AccountService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private datePipe: DatePipe) {

    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.currentUser = sessionStorage.getItem("username");
    this.userId = sessionStorage.getItem("userId");
    // Add income form.
    this.incomeForm = new FormGroup({
      "incomeAmount" : new FormControl(this.incomeAmount, [
        Validators.required,
        Validators.pattern("^[0-9].*$")
      ]),
      "incomeDate": new FormControl(this.incomeDate)
    }
    );

    // Add transaction form.
    this.transactionForm = new FormGroup({
      "transactionAmount" : new FormControl(this.transactionAmount, [
        Validators.required,
        Validators.pattern("^[0-9].*$")
      ]),
      "transactionCategory": new FormControl(this.transactionCategory, [
        Validators.required
      ]),
      "transactionDate": new FormControl(this.transactionDate)
    });
  }

  // Get account balance and account name.
  getAccount() {
    this.accountService.getAccount(this.userId).subscribe(resp => {
      this.balance = formatCurrency(resp["balance"] as number, 'en', '$');
      this.accountName = resp["accountName"];
      let budgetStartDate = resp["budgetStartDate"];

      if (this.monthLapsed(new Date(budgetStartDate))) {
        this.accountService.archiveAccount(this.userId, this.currentUser).subscribe(value => {
          console.log(value);
        });
      }
    })
  }

  // Get income earned this month.
  getIncome() {
    this.accountService.getAmountEarned(this.userId, this.month, this.year).subscribe(resp => {
      this.amountEarned = formatCurrency(resp as number, 'en', '$');
    })
  }

  getSpent() {
    this.transactions = [];

    this.accountService.getTotalSpentByCategory(this.userId, this.month, this.year).subscribe(data => {
      let totalSpent = 0;
      if (data == 0) {
        this.amountSpent = "$0.00";
        // If nothing was spent this month, create template transactions by
        // category from last month and rollover to this month.
        this.budgetItems.forEach(budgetItem => {
          let template = new Transaction();
          template.category = budgetItem["category"];
          template.amount = 0;
          this.transactions.push(template);
        });
        this.loadingBudget = false;
      }
      else {
        this.transactions = [];
        // Get all transactions by category and calculate total spent.
        Object.keys(data).forEach((key) => {
          let transaction = new Transaction();
          transaction.id = data[key].id;
          transaction.owner = data[key].owner;
          transaction.amount = data[key].amount;
          transaction.archived = data[key].archived;
          transaction.date = data[key].date;
          transaction.category = data[key].category;
          transaction.account = data[key].account;
          this.transactions.push(transaction);
          totalSpent += transaction.amount;
        })

        // We want to show budget items even if nothing was spent this month
        // in each category.

        this.budgetItems.forEach(budgetItem => {
          let template = new Transaction();
          template.category = budgetItem.category;
          template.amount = 0;
          if (!this.transactions.find(e => e.category === template.category)) {
            this.transactions.push(template);
          }
        });

        this.loadingBudget = false;
     //   console.log(this.transactions);
        // Format total spent.
        this.amountSpent = formatCurrency(totalSpent, 'en', '$');
      }
    })
  }

  getBudget() {
    this.budgetItems = [];
    this.budgetService.getBudgetByCategory(this.userId, this.month, this.year).subscribe(data => {
      Object.keys(data).forEach((key) => {
        let budget = new Budget();
        budget.amount = data[key].amount;
        budget.category = data[key].category;
        this.budgetItems.push(budget);
      })

      if (this.budgetItems.length == 0) {
        this.noBudget = true;
        this.amountSpent = formatCurrency(0, 'en', '$');
      }
      else {
        this.loadingBudget = true;
        this.getSpent();
      }
    })
  }

  getCategories() {
    this.categories = [];
    this.budgetService.getBudgetCategories(this.userId).subscribe(data => {
      Object.keys(data).forEach((key) => {
        let category = new Category();
        category.id = data[key].id;
        category.owner = data[key].owner;
        category.title = data[key].title;
        this.categories.push(category);
      })
    });
  }

  showIncomeDialog() {
    this.dialog.open(this.addIncomeDialog, {
      minWidth: '30%',
      maxWidth: '100%'
    })
  }

  addIncome() {
    if (this.incomeForm.get('incomeAmount').invalid) {
      this.errorMessage = "Please enter a valid amount.";
    }
    else {
      this.incomeAmount = this.incomeForm.get('incomeAmount').value;
      this.incomeDate = this.incomeForm.get('incomeDate').value;

      if (this.incomeDate == null) {
        let today = new Date();
        this.incomeDate = formatDate(today, 'yyyy-MM-dd', 'en-us');
      }

      let transaction = new Transaction();
      transaction.id = null;
      transaction.owner = this.currentUser;
      transaction.amount = this.incomeAmount;
      if (this.monthLapsed(new Date(this.incomeDate))) {
        transaction.archived = 1;
      }
      else {
        transaction.archived = 0;
      }
      transaction.date = this.incomeDate;
      transaction.category = 'Income';
      transaction.account = null;
      this.accountService.addTransaction(this.userId, transaction).subscribe(res => {
        this.getAccount();
        this.getIncome();
      })
    }
  }

  showTransactionDialog() {
    this.dialog.open(this.addTransactionDialog, {
      minWidth: '40%',
      maxWidth: '100%'
    })
  }

  showCategoryDialog() {
    this.dialog.open(this.manageCategoryDialog, {
      minWidth: '40%',
      maxWidth: '100%'
    })
  }

  addTransaction() {
    let amount = this.transactionForm.get('transactionAmount');
    let category = this.transactionForm.get('transactionCategory');
    let date = this.transactionForm.get('transactionDate');

    if (amount.invalid) {
      this.errorMessage = "Please enter a valid amount.";
    }
    else if (category.invalid) {
      this.errorMessage = "Please select a category.";
    }
    else {
      this.errorMessage = undefined;

      if (date.value == null) {
        let today = new Date();
        this.transactionDate = formatDate(today, 'yyyy-MM-dd', 'en-us');
      }
      else {
        this.transactionDate = date.value;
      }

      let transaction = new Transaction();
      transaction.id = null;
      transaction.owner = this.currentUser;
      transaction.amount = amount.value;
      transaction.category = category.value.title;
      transaction.account = this.accountName;
      transaction.date = this.transactionDate;

      let correctedDate = formatDate(transaction.date, 'MM-dd-yyyy', 'en-us');

      if (this.monthLapsed(new Date(correctedDate))) {
        transaction.archived = 1;
      }
      else {
        transaction.archived = 0;
      }

      this.accountService.addTransaction(this.userId, transaction).subscribe(resp => {
        this.snackBar.open("Transaction added.", "OK", {"duration" : 2000});
        this.getAccount();
        this.getBudget();
        this.getSpent();
      })
    }
  }

  addCategory() {
    if (this.categoryName == undefined) {
      this.errorMessage = "Please enter a category name.";
    }
    else {
      this.errorMessage = null;
      this.budgetService.addCategory(this.userId, this.categoryName).subscribe(resp => {
        this.snackBar.open("Category added!", "OK", {"duration" : 2000});
        this.getCategories();
      })
      this.categoryName = undefined;
    }
  }

  deleteCategory() {
    if (this.categoryToRemove != undefined) {
      this.budgetService.deleteCategory(this.userId, this.categoryToRemove.id).subscribe(resp => {
        this.snackBar.open("Category removed.", "OK", {"duration" : 2000});
        this.getCategories();
        this.categoryToRemove = undefined;
      })
    }
  }

  monthLapsed(date: Date) : boolean {
    let lapsed = false;
    let today = new Date();

    if ((date.getMonth() + 1) < (today.getMonth() + 1) || date.getFullYear() < today.getFullYear()) {
      lapsed = true;
    }
    return lapsed;
  }

  ngOnInit(): void {
    this.getAccount();
    this.getIncome();
    this.getBudget();
  //  this.getSpent();
    this.getCategories();
  }

}
