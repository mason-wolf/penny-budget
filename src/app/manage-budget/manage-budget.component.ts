import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from '../services/account.service';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../shared/models/budget.model';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-manage-budget',
  templateUrl: './manage-budget.component.html',
  styleUrls: ['./manage-budget.component.css']
})
export class ManageBudgetComponent implements OnInit {

  budgetItems: Budget[] = [];
  currentUser: string;
  date = new Date();
  month: number;
  year: number;

  income;
  balance;
  totalBudget;

  constructor(private budgetService: BudgetService, private accountService: AccountService) { 
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.currentUser = sessionStorage.getItem("username");
    this.getBudget();
    this.getIncome();
    this.getBalance();
    this.getTotalBudget();
  }

  getBudget() {
    this.budgetItems = [];
    this.budgetService.getBudgetByCategory(this.currentUser, this.month, this.year).subscribe(data => {
      Object.keys(data).forEach((key) => {
        let budget = new Budget();
        budget.id = data[key].id;
        budget.amount = data[key].amount;
        budget.category = data[key].category;
        this.budgetItems.push(budget);
      })
    })
  }

  getTotalBudget() {
    this.budgetService.getTotalBudget(this.currentUser).subscribe(value => {
      this.totalBudget = value["amount"];
    })
  }

  getIncome() {
    this.accountService.getAmountEarned(this.currentUser, this.month, this.year).subscribe(value => {
      this.income = value;
    })
  }

  getBalance() {
    this.accountService.getAccount(this.currentUser).subscribe(value => {
      this.balance = formatCurrency(value["balance"] as number, 'en', '$');
    })
  }

  deleteBudgetItem(budgetItem) {
    this.budgetService.deleteBudget(budgetItem.id).subscribe(resp => {
      console.log(resp);
      this.getBudget();
    })
  }

  calculateSavings(income, balance, budget) {
    if (income && balance && budget) {
      balance = balance.replace("$", "").replace(",", "");
      let savings = (Number(income) + Number(balance)) - budget;
      return savings;
    }
  }

  ngOnInit(): void {
  }

}
