import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { AccountActivityComponent } from './account-activity/account-activity.component';
import { ManageBudgetComponent } from './manage-budget/manage-budget.component';
import { BudgetHistoryComponent } from './budget-history/budget-history.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CanvasJSChart } from 'src/assets/canvasjs-chart-3.7.26/canvasjs.angular.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AccountActivityComponent,
    ManageBudgetComponent,
    BudgetHistoryComponent,
    ResetPasswordComponent,
    CreateAccountComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
