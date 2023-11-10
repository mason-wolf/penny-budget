import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  accountForm: FormGroup;
  errorMessage: string;
  passwordReset : string;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let resetLink = this.route.snapshot.paramMap.get("resetLink");
    if (resetLink != null) {
      console.log(resetLink);
    }
    this.accountForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
    });
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
