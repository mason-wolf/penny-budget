import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountActivityComponent } from './account-activity/account-activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

// https://www.positronx.io/angular-jwt-user-authentication-tutorial/

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'account-activity', component: AccountActivityComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
