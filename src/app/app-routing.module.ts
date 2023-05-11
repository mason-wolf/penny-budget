import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountActivityComponent } from './account-activity/account-activity.component';
import { BudgetHistoryComponent } from './budget-history/budget-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManageBudgetComponent } from './manage-budget/manage-budget.component';
import { AuthGuard } from './shared/auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

// https://www.positronx.io/angular-jwt-user-authentication-tutorial/

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'account-activity', component: AccountActivityComponent, canActivate: [AuthGuard]},
  { path: 'manage-budget', component: ManageBudgetComponent, canActivate: [AuthGuard]},
  { path: 'budget-history/:month/:year', component: BudgetHistoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
