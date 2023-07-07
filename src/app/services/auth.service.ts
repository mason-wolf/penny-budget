import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// https://www.positronx.io/angular-jwt-user-authentication-tutorial/

export class AuthService {

  constructor(private httpClient : HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.httpClient.post<any>(environment.apiEndpoint + "/login", JSON.stringify({username, password}))
      .subscribe((res: any) => {
        if(!res["error"]) {
          localStorage.setItem('access_token', res.access_token);
          sessionStorage.setItem('username', res.username);
          sessionStorage.setItem('userId', res.userId);
          this.router.navigate(['dashboard']);
        }
      })
  }

  createaccount(username: string, password: string) {
    return this.httpClient.post(environment.apiEndpoint + "/users", JSON.stringify({username: username, password : password}));
  }

  resetPassword(username: string, old_password: string, new_password) {
    return this.httpClient.post(environment.apiEndpoint + "/reset-password", JSON.stringify({username, old_password, new_password}))
  }

  logout() {
    let token = localStorage.removeItem('access_token');
    sessionStorage.removeItem('username');
    if (token == null) {
      this.router.navigate(['']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
