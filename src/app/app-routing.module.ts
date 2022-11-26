import { SECURE_ROUTES } from './layouts/secure/secure.routes';
import { PUBLIC_ROUTES } from './layouts/public/public.routes';
import { SecureComponent } from '../../src/app/layouts/secure/secure.component';
import { PublicComponent } from '../../src/app/layouts/public/public.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './services/auth.service';

// const routes: Routes = [
//   {
//     "path" : "",
//     "component" : LoginComponent
//   },
//   {
//     "path" : "login",
//     "component" : LoginComponent
//   },
//   {
//     "path" : "home",
//     "component" : HomeComponent
//   },
//   {
//     "path" : "registration",
//     "component" : RegistrationComponent
//   },
//   {
//     "path" : "forget-password",
//     "component" : ForgetPasswordComponent
//   }
// ];

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }