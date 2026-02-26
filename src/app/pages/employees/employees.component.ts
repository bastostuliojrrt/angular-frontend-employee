import { Component } from '@angular/core';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    EmployeeListComponent,
    NavBarComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  title = 'Employee List';

}
