import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  accountForm: FormGroup;
  errorMessage: string;
  passwordReset : string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'old_password' : new FormControl(null, Validators.required),
      "new_password": new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let email = this.accountForm.get('email').value;
    let old_password = this.accountForm.get('old_password').value;
    let new_password = this.accountForm.get('new_password').value;
    if (email != null && old_password != null && new_password != null) {
      this.authService.resetPassword(email, old_password, new_password).subscribe(res => {
        if (res["error"]) {
          this.errorMessage = res["error"];
        }
        else {
          this.errorMessage = null;
          this.passwordReset = "Your password has been reset.";
        }
      })
    }
    else {
      this.errorMessage = "Please enter required fields."
    }
  }
}
