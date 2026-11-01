import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { DashboardPage } from './panel/dashboard-page/dashboard-page';

export const routes: Routes = [
    {path:'login',component:LoginPage},
    {path:'panel',component:DashboardPage},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
