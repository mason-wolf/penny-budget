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
}
