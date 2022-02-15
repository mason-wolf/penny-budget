import { formatCurrency, formatDate } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '../services/account.service';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../shared/models/budget.model';
import { Transaction } from '../shared/models/transaction.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: string;
  balance: string;
  accountName: string;
  amountEarned: string;
  amountSpent: string;
  date = new Date();
  month: number;
  year: number;
  transactions: Transaction[] = [];
  budgetItems: Budget[] = [];
  incomeError: string;

  incomeAmount: number;
  incomeDate: string;
  incomeForm: FormGroup;

  transactionAmount: number;
  transactionDate: string;
  transactionCategory: string;
  transactionForm: FormGroup;

  categoryName: string;
  categories : [] = [];

  @ViewChild('addIncomeDialog') addIncomeDialog: TemplateRef<any>;
  @ViewChild('addTransactionDialog') addTransactionDialog: TemplateRef<any>;
  @ViewChild('manageCategoryDialog') manageCategoryDialog: TemplateRef<any>;

  constructor(private budgetService: BudgetService, private accountService: AccountService, private dialog: MatDialog) {

    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.currentUser = sessionStorage.getItem("username");

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

    this.getAccount();
    this.getIncome();
    this.getSpent();
    this.getBudget();
  }

  // Get account balance and account name.
  getAccount() {
    this.accountService.getAccount(this.currentUser).subscribe(resp => {
      this.balance = formatCurrency(resp["balance"] as number, 'en', '$');
      this.accountName = resp["accountName"];
    })
  }

  // Get income earned this month.
  getIncome() {
    this.accountService.getAmountEarned(this.currentUser, this.month, this.year).subscribe(resp => {
      this.amountEarned = formatCurrency(resp as number, 'en', '$');
    })
  }

  getSpent() {
    this.accountService.getTotalSpentByCategory(this.currentUser, this.month, this.year).subscribe(data => {

      let totalSpent = 0;
      if (data == 0) {
        this.amountSpent = "";
      }
      else {
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

        // Format total spent.
        this.amountSpent = formatCurrency(totalSpent, 'en', '$');
      }
    })
  }

  getBudget() {
    this.budgetService.getBudgetByCategory(this.currentUser, 1, this.year).subscribe(data => {
      Object.keys(data).forEach((key) => {
        let budget = new Budget();
        budget.amount = data[key].amount;
        budget.category = data[key].category;
        this.budgetItems.push(budget);
      })
    })
  }
  
  showIncomeDialog() {
    let incomeDialog = this.dialog.open(this.addIncomeDialog, {
      width: '30%'
    })
  }

  addIncome() {
    if (this.incomeForm.get('incomeAmount').invalid) {
      this.incomeError = "Please enter a valid amount.";
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
      transaction.archived = 0;
      transaction.date = this.incomeDate;
      transaction.category = 'Income';
      transaction.account = null;
      this.accountService.addTransaction(transaction).subscribe(res => {
        this.getAccount();
        this.getIncome();
      })
    }
  }

  showTransactionDialog() {
    let transactionDialog = this.dialog.open(this.addTransactionDialog, {
      width: '30%'
    })
  }

  showCategoryDialog() {
    let categoryDialog = this.dialog.open(this.manageCategoryDialog, {
      width: '30%'
    })
  }
  addTransaction() {

  }

  ngOnInit(): void {
  }

}
