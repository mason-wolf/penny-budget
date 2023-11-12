import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/models/transaction.model';
import { Budget } from '../shared/models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  headers = new HttpHeaders().set('Content-Type', 'application-json');

  constructor(private httpClient: HttpClient) { }

  addBudget(userId: string, budgetItem: Transaction) {
    return this.httpClient.post(environment.apiEndpoint + '/budget/' + userId, {budgetItem})
  }

  getBudgetByCategory(userId: string, month: number, year: number) {
    return this.httpClient.get<Budget[]>(environment.apiEndpoint + '/budget/' + userId + "/" + year + "/" + month);
  }

  getBudgetHistory(userId) {
    return this.httpClient.get(environment.apiEndpoint + '/budget/' + userId + "/history");
  }

  getRemainingBalance(username: string, month: number, year: number) {
    return this.httpClient.get(environment.apiEndpoint + '/account/' + username + "/balance/" + year + "/" + month);
  }

  getBudgetArchive(userId: string, month: number, year: number) {
    return this.httpClient.get(environment.apiEndpoint + '/budget/' + userId + "/archive/" + year + "/" + month);
  }

  getBudgetCategories(userId: string) {
    return this.httpClient.get(environment.apiEndpoint + '/budget/' + userId + "/categories");
  }

  getTotalBudget(userId: string) {
    return this.httpClient.get(environment.apiEndpoint + '/budget/' + userId + "/totals");
  }

  addCategory(userId: string, title: string) {
    return this.httpClient.post(environment.apiEndpoint + "/category/" + userId, { "title": title })
  }

  deleteCategory(userId: string, categoryId: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        categoryId: categoryId
      }
    }
    return this.httpClient.delete(environment.apiEndpoint + '/category/' + userId, options);
  }

  deleteBudget(userId: string, budgetId: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        budgetId: budgetId
      }
    }
    return this.httpClient.delete(environment.apiEndpoint + '/budget/' + userId, options);
  }
}
