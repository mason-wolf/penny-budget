import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getTotalSpentByCategory(userId: string, month: number, year: number) {
    return this.httpClient.get(environment.apiEndpoint + '/account/' + userId + "/summary/" + year +"/" + month);
  }

  getTransactionHistory(userId: string) {
    return this.httpClient.get(environment.apiEndpoint + "/account/" + userId + "/transactions/");
  }

  addTransaction(userId: string, transaction: Transaction) {
    return this.httpClient.post(environment.apiEndpoint + "/account/" + userId + "/transaction/", { transaction });
  }

  deleteTransaction(userId: string, transaction) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        transaction: transaction
      }
    }
    return this.httpClient.delete(environment.apiEndpoint + "/account/" + userId + "/transaction/", options);
  }

  archiveAccount(username: string) {
    return this.httpClient.post(environment.apiEndpoint + '/archiveAccount', { "username" : username })
  }
}
