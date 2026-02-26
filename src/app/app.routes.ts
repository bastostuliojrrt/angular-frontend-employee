import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/employees/employees.component';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'}, // rota padrão que redireciona para a página de login
    {path: 'login', component: LoginComponent}, // rota para a página de login
    {path: 'employees', component: EmployeesComponent}

];

