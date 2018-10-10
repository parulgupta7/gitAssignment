import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTowerComponent } from './add-tower/add-tower.component';
import { ViewTowerComponent } from './view-tower/view-tower.component';


//all routes one level and multiple level need to be specified here
export const routes: Routes = [
    //components which do not have children
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    {
        path: 'dashboard', component: DashboardComponent
    }
];