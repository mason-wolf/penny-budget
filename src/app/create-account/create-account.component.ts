import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let email = this.accountForm.get('email').value;
    let password = this.accountForm.get('password').value;

    if (email != null && password != null) {
      this.authService.createaccount(email, password).subscribe(res => {
        if (res["error"]) {
          this.errorMessage = "User already exists.";
        }
        else {
              this.successMessage = "Account created!";
        }
      });
    }
    else {
      this.errorMessage = "Please enter the required information.";
    }
  }

}
