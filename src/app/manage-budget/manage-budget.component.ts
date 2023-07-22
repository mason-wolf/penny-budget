import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../shared/models/budget.model';
import { Category } from '../shared/models/category.model';
import { Transaction } from '../shared/models/transaction.model';

@Component({
  selector: 'app-manage-budget',
  templateUrl: './manage-budget.component.html',
  styleUrls: ['./manage-budget.component.css']
})
export class ManageBudgetComponent implements OnInit {

  budgetItems: Budget[] = [];
  currentUser: string;
  userId: string;
  date = new Date();
  month: number;
  year: number;

  totalBudget;
  monthlyIncome;
  errorMessage;

  categories : Category[] = [];
  budgetAmount: number;
  budgetCategory: string;
  categoryToRemove: Category;

  @ViewChild('setIncomeDialog') setIncomeDialog: TemplateRef<any>;
  @ViewChild('addBudgetDialog') addBudgetDialog: TemplateRef<any>;
  @ViewChild('manageCategoryDialog') manageCategoryDialog: TemplateRef<any>;

  constructor(private budgetService: BudgetService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.currentUser = sessionStorage.getItem("username");
    this.userId = sessionStorage.getItem("userId")
    this.getBudget();
    this.getCategories();
    this.getTotalBudget();
    this.monthlyIncome = localStorage.getItem("monthlyIncome");
  }

  getBudget() {
    this.budgetItems = [];
    this.budgetService.getBudgetByCategory(this.userId, this.month, this.year).subscribe(data => {
      console.log(data);
      Object.keys(data).forEach((key) => {
        let budget = new Budget();
        budget.id = data[key].id;
        budget.amount = data[key].amount;
        budget.category = data[key].category;
        this.budgetItems.push(budget);
      })
    })
  }

  getCategories() {
    this.categories = [];
    this.budgetService.getBudgetCategories(this.currentUser).subscribe(data => {
      Object.keys(data).forEach((key) => {
        let category = new Category();
        category.id = data[key].id;
        category.owner = data[key].owner;
        category.title = data[key].title;
        this.categories.push(category);
      })
    })
  }

  getTotalBudget() {
    this.budgetService.getTotalBudget(this.currentUser).subscribe(value => {
      this.totalBudget = value["amount"];
    })
  }

  showBudgetDialog() {
    this.dialog.open(this.addBudgetDialog, {
      minWidth: '30%',
      maxWidth: '100%'
    })
  }

  addBudgetItem() {
    let validator: RegExp = /^[0-9].*$/;

    if (this.budgetAmount != null && validator.test(this.budgetAmount.toString()) && this.budgetCategory != null) {
      let budgetItem = new Transaction();
      budgetItem.owner = this.currentUser;
      budgetItem.category = this.budgetCategory;
      budgetItem.amount = this.budgetAmount;
      this.budgetService.addBudget(budgetItem).subscribe(resp => {
        console.log(resp);
        this.dialog.closeAll();
      })

      this.getBudget();
      this.getTotalBudget();
    }
  }

  deleteBudgetItem(budgetItem) {
    this.budgetService.deleteBudget(budgetItem.id).subscribe(resp => {
      this.getBudget();
      this.getTotalBudget();
    })
  }

  updateIncome() {
    let valid = false;
    let validator: RegExp = /^[0-9].*$/;

    if (this.monthlyIncome != null && validator.test(this.monthlyIncome.toString())) {
      valid = true;
      this.dialog.closeAll();
      localStorage.setItem("monthlyIncome", this.monthlyIncome.toString());
    }
    return valid;
  }

  showIncomeDialog() {
    this.dialog.open(this.setIncomeDialog, {
      minWidth: '30%',
      maxWidth: '100%'
    })

    this.monthlyIncome = null;
  }

  calculateSavings(monthlyIncome, totalBudget) {
    let savings = monthlyIncome - totalBudget;
    return savings;
  }

  showCategoryDialog() {
    this.dialog.open(this.manageCategoryDialog, {
      minWidth: '40%',
      maxWidth: '100%'
    })
  }

  addCategory() {
    if (this.budgetCategory== undefined) {
      this.errorMessage = "Please enter a category name.";
    }
    else {
      this.errorMessage = null;
      console.log(this.budgetCategory)
      this.budgetService.addCategory(this.currentUser, this.budgetCategory).subscribe(resp => {
        this.snackBar.open("Category added!", "OK", {"duration" : 2000});
        this.getCategories();
      })
      this.budgetCategory = undefined;
    }
  }

  deleteCategory() {
    if (this.categoryToRemove != undefined) {
      this.budgetService.deleteCategory(this.categoryToRemove.id).subscribe(resp => {
        this.snackBar.open("Category removed.", "OK", {"duration" : 2000});
        this.getCategories();
        this.categoryToRemove = undefined;
      })
    }
  }

  ngOnInit(): void {
  }

}
