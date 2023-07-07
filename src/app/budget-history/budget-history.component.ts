import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-history',
  templateUrl: './budget-history.component.html',
  styleUrls: ['./budget-history.component.css']
})
export class BudgetHistoryComponent implements OnInit {

  currentUser: string;
  userId: string;
  budgetArchive : any[] = [];
  budgetDate: Date;
  month: number;
  year: number;

  income: number;
  totalBudget = 0;
  totalSpent = 0;

  remainingBalance: number;

  constructor(private budgetService: BudgetService, private router: ActivatedRoute, private accountService: AccountService) {
    this.currentUser = sessionStorage.getItem('username');
    this.userId = sessionStorage.getItem('userId');
    this.month = Number(this.router.snapshot.paramMap.get('month'));
    this.year = Number(this.router.snapshot.paramMap.get('year'));
    this.budgetDate = new Date(this.year, this.month, 0, 1);
    this.getBudgetArchive();
    this.getIncome();

    this.budgetService.getRemainingBalance(this.userId, this.month, this.year).subscribe(value => {
      this.remainingBalance = Number(value);
    })
  }

  getBudgetArchive() {
    this.budgetArchive = [];
    this.budgetService.getBudgetArchive(this.currentUser, this.month, this.year).subscribe(value => {
      Object.keys(value).forEach((key) => {
        this.budgetArchive.push(value[key]);
        this.totalBudget += value[key].budgetAmount;
        this.totalSpent += value[key].budgetSpent;
      })
    })
  }

  getIncome() {
    this.accountService.getAmountEarned(this.userId, this.month, this.year).subscribe(value => {
      this.income = Number(value);
    })
  }

  ngOnInit(): void {
  }

}
