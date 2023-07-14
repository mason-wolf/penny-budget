import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from '../services/account.service';
import { Transaction } from '../shared/models/transaction.model';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.css']
})
export class AccountActivityComponent implements OnInit {

  currentUser: string;
  userId = sessionStorage.getItem("userId");
  dataSource = new MatTableDataSource();
  displayedColumns : string[] = ["date", "category", "amount", "deleteAction"]
  transactions : Transaction[] = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('addIncomeDialog') addIncomeDialog: TemplateRef<any>;

  constructor(private accountService: AccountService, private dialog: MatDialog) {
    this.currentUser = sessionStorage.getItem("username");
    this.getTransactionHistory();
   }

  getTransactionHistory() {
    this.accountService.getTransactionHistory(this.userId).subscribe(data => {
      Object.keys(data).forEach((key) => {
        this.transactions.push(data[key])
      })

      this.dataSource.data = this.transactions;
      this.dataSource.paginator = this.paginator;
    })
  }

  showIncomeDialog() {
    let incomeDialog = this.dialog.open(this.addIncomeDialog, {
      width: '40%'
    });
  }

  deleteTransaction(transaction) {
    this.accountService.deleteTransaction(this.userId, transaction).subscribe(resp => {
      this.transactions = [];
      this.getTransactionHistory();
    })
  }

  ngOnInit(): void {
  }

}

