import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccount(userId: string) {
    return this.httpClient.get(environment.apiEndpoint + '/account/' + userId);
  }

  getAmountEarned(userId: string, month: number, year: number) {
    return this.httpClient.get(environment.apiEndpoint + '/account/' + userId + "/income/" + year + "/" + month);
  }

  getTotalSpentByCategory(username: string, month: number, year: number) {
    return this.httpClient.post(environment.apiEndpoint + '/getTotalSpentByCategory', { "username" : username, "month" : month, "year" : year});
  }

  getTransactionHistory(username: string) {
    return this.httpClient.post(environment.apiEndpoint + "/getTransactionHistory", { "username" : username });
  }

  addTransaction(transaction: Transaction) {
    return this.httpClient.post(environment.apiEndpoint + '/addTransaction', { transaction });
  }

  deleteTransaction(transaction) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        transaction: transaction
      }
    }
    return this.httpClient.delete(environment.apiEndpoint + '/deleteTransaction', options);
  }

  archiveAccount(username: string) {
    return this.httpClient.post(environment.apiEndpoint + '/archiveAccount', { "username" : username })
  }
}
