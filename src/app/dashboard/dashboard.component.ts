import { formatCurrency } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
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

  currentUser;
  balance : string;
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

  @ViewChild('addIncomeDialog') addIncomeDialog: TemplateRef<any>;

  constructor(private budgetService: BudgetService, private accountService: AccountService, private dialog: MatDialog) {

    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.currentUser = sessionStorage.getItem("username");

    this.incomeForm = new FormGroup({
      "incomeAmount" : new FormControl(this.incomeAmount, [
        Validators.required,
        Validators.pattern("^[0-9].*$")
      ]),
      "incomeDate": new FormControl(this.incomeDate)
    }
    )
    this.getAccount();
    this.getIncome();
    this.getSpent();
    this.getBudget();
  }

  getAccount() {
    this.accountService.getAccount(this.currentUser).subscribe(value => {
      this.balance = formatCurrency(value["balance"] as number, 'en', '$');
    })
  }

  getIncome() {
    this.accountService.getAmountEarned(this.currentUser, 1, this.year).subscribe(value => {
      this.amountEarned = formatCurrency(value as number, 'en', '$');
    })
  }

  getSpent() {
    this.accountService.getTotalSpentByCategory(this.currentUser, 1, this.year).subscribe(data => {

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
      console.log(this.incomeForm.get('incomeAmount').value);
      console.log(this.incomeForm.get('incomeDate').value);
    }
  }

  ngOnInit(): void {
  }

}
