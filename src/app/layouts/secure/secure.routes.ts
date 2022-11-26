import { HomeComponent } from './../../home/home.component';
import { Routes } from '@angular/router';

export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];
