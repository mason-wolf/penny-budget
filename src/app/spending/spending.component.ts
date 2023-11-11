import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Category } from '../shared/models/category.model';
import { DatePipe, formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css']
})
export class SpendingComponent implements OnInit {

  userId: string;
  date = new Date();
  month: number;
  year: number;

  selectedArchive : any;
  selectedCategory: Category;
  selectedTimeFrame: number;
  budgetHistory : any[] = [];
  categories: any[] = [];

  spendingItems: any[] = [];
  noSpending: boolean = false;

  pieChart = {
    title: {
      text: '',
    },
    data: [
      {
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontFamily: "Urbanist",
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
        ],
      },
    ]
  };

  barChart = {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title:{
      text: ""
    },
    axisY: {
      title: ""
    },
    data: [{
      type: "column",
      showInLegend: true,
      legendText: "",
      dataPoints: []
    }]
  };

  constructor(private accountService: AccountService,
    private router: Router,
    private datePipe: DatePipe,
    private budgetService: BudgetService) {
    this.userId = sessionStorage.getItem("userId");
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();

    this.accountService.getTotalSpentByCategory(this.userId, this.month, this.year).subscribe(data => {
      let options = [];
      for (var d in data) {
        let amount = data[d]["amount"];
        let category = data[d]["category"];
        let chartItem = { y: amount, label: category};
        options.push(chartItem);
      }

      if (options.length == 0) {
        this.noSpending = true;
      }
      else {
        this.spendingItems = options;
      }

      this.pieChart = {
        title: {
          text: '',
        },
        data: [
          {
            type: "doughnut",
            startAngle: 60,
            indexLabelFontFamily: "Urbanist",
            indexLabelFontSize: 18,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<span style='font-family:Urbanist;'><b>{label}:</b> ${y} (#percent%)</span>",
            dataPoints: options
          },
        ]
      }
    });

    this.getCategories();
    this.getBudgetHistory();
   }

   viewSelectedArchive() {
    if (this.selectedArchive != null) {
      let date = new Date(this.selectedArchive);
      let month = formatDate(date, 'MM', 'en-us');
      let year = formatDate(date, 'YYYY', 'en-us');
      this.router.navigate(['/budget-history/', month, year])
    }
  }

  viewSpendingHistory() {
    this.renderBarChart(null, null);
    this.accountService.getMonthlySpendingByTimeframe(this.userId, this.selectedCategory.title, this.selectedTimeFrame).subscribe(resp => {
      let options = [];
      let category = "";
      for (var d in resp) {
        let amount = resp[d]["amount"];
        let date = this.datePipe.transform(resp[d]["date"], 'MMMM')
        category = resp[d]["category"];
        let chartItem = { y: amount, label: date};
        options.push(chartItem);
      }
      this.renderBarChart(options, this.selectedCategory.title);
    });
  }

  renderBarChart(data, legendText) {
    this.barChart = {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: ""
      },
      axisY: {
        title: "$ Spent"
      },
      data: [{
        type: "column",
        showInLegend: false,
        legendText: "  ",
        dataPoints: data
      }]
    }
  }

  getBudgetHistory() {
    this.budgetService.getBudgetHistory(this.userId).subscribe(data => {
      Object.keys(data).forEach((key) => {
        let date = new Date(data[key].year, data[key].month, 0, 1);
        this.budgetHistory.push(date);
      })
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
      this.selectedCategory = this.categories[0];
    });
    this.selectedTimeFrame = 3;
  }

  ngOnInit(): void {


  }

}
