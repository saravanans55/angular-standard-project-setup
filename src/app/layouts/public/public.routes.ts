import { ForgetPasswordComponent } from './../../forget-password/forget-password.component';
import { Routes } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { LoginComponent } from './../../login/login.component';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
];
