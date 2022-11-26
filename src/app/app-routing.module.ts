import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path" : "",
    "component" : LoginComponent
  },
  {
    "path" : "login",
    "component" : LoginComponent
  },
  {
    "path" : "home",
    "component" : HomeComponent
  },
  {
    "path" : "registration",
    "component" : RegistrationComponent
  },
  {
    "path" : "forget-password",
    "component" : ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }