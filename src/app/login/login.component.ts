import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage : string;

  constructor(private authService: AuthService, private router: Router, private accountService: AccountService) {
    this.setLoginForm();
    sessionStorage.removeItem('username');
    localStorage.removeItem('access_token');
   }

  setLoginForm() {

    this.loginForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required)
    });

  }

  onSubmit() {

    let emailField = this.loginForm.get('email');
    let passwordField = this.loginForm.get('password');

    if (emailField.errors != null || passwordField.errors != null) {
      this.errorMessage = "Incorrect email or password.";
    }
    else {
      this.authService.login(emailField.value, passwordField.value);
      if (!this.authService.isLoggedIn) {
        setTimeout(() => { this.errorMessage = "Incorrect email or password."; }, 1000);
      }
    }
  }

  ngOnInit(): void {
  }

}
