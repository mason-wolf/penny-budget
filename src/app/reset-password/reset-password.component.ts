import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  accountForm: FormGroup;
  passwordResetForm: FormGroup;
  errorMessage: string;
  passwordReset : string;
  resetIdProvided: boolean = false;
  resetIdValid: boolean = false;
  resetLink: string;
  account;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.resetLink = this.route.snapshot.paramMap.get("resetLink");

    if (this.resetLink != null) {
      // Redirect to login if password reset id isn't linked to
      // a user account.
      this.resetIdValid = true;
      this.authService.validatePasswordResetId(this.resetLink).subscribe(value => {
        if (value.length == 0) {
          this.router.navigate(['login']);
        }
        else {
          this.resetIdProvided = true;
          this.account = value;

        }
      })
    }
    this.accountForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
    });

    this.passwordResetForm = new FormGroup({
      'password': new FormControl(null, Validators.required),
      'passwordConfirmed': new FormControl(null, Validators.required)
    })
  }

  resetPassword() {
    let password = this.passwordResetForm.get('password').value;
    let passwordConfirmed = this.passwordResetForm.get('passwordConfirmed').value;
    if (password != passwordConfirmed) {
      this.errorMessage = "Passwords do not match.";
    }
    else {
      this.authService.resetPasswordValidated(passwordConfirmed, this.resetLink).subscribe(value => {
        console.log(value);
      })
      this.router.navigate(['login']);
    }
  }
  
  onSubmit() {
    let email = this.accountForm.get('email').value;
    if (email != null) {
      this.authService.resetPassword(email).subscribe(res => {
        if (res["error"]) {
          this.errorMessage = res["error"];
        }
        else {
          this.errorMessage = null;
          this.passwordReset = "Check your email for the password reset link.";
        }
      })
    }
    else {
      this.errorMessage = "Please enter required fields."
    }
  }
}
