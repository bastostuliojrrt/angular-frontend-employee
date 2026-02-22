import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'}, // rota padrão que redireciona para a página de login
    {path: 'login', component: LoginComponent}, // rota para a página de login
    {path: 'employees', component: EmployeeListComponent}

];

