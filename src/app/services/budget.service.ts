import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  headers = new HttpHeaders().set('Content-Type', 'application-json');
  
  constructor(private httpClient: HttpClient) { }

  getBudgetByCategory(username: string, month: number, year: number) {
    return this.httpClient.post(environment.apiEndpoint + '/getBudgetByCategory', { "username" : username, "month" : month, "year" : year });
  }

  getBudgetCategories(username: string) {
    return this.httpClient.post(environment.apiEndpoint + "/getBudgetCategories", { "username" : username })
  }

  getTotalBudget(username: string) {
    return this.httpClient.post(environment.apiEndpoint + "/getTotalBudget", { "username" : username })
  }

  addCategory(username: string, title: string) {
    return this.httpClient.post(environment.apiEndpoint + "/addCategory", { "username": username, "title": title })
  }

  deleteCategory(categoryId: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        categoryId: categoryId
      }
    }
    return this.httpClient.delete(environment.apiEndpoint + '/deleteCategory', options);
  }

  deleteBudget(budgetId: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        budgetId: budgetId
      }
    }
    return this.httpClient.delete(environment.apiEndpoint + '/deleteBudget', options);
  }
}
