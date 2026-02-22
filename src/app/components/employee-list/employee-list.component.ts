import { Component } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  
  // array do tipo Employee para armazenar os dados dos funcionários
  employees!: Employee[];

  constructor() {}
  
  // método ngOnInit é chamado quando o componente é inicializado 
  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        emailId: 'john.doe@example.com',
        departament: 'IT'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        emailId: 'jane.smith@example.com',
        departament: 'HR'
      },
      {
        id: 3,
        firstName: 'Bob',
        lastName: 'Johnson',
        emailId: 'bob.johnson@example.com',
        departament: 'Finance'
      }
    ];
  }
}
