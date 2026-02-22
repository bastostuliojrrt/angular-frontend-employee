import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  
  // array do tipo Employee para armazenar os dados dos funcionários
  employees!: Employee[];
  
  // injeção de dependência do serviço EmployeeService para obter os dados dos funcionários
  constructor(private employeeService: EmployeeService) {}
  
  // método ngOnInit é chamado quando o componente é inicializado 
  ngOnInit(): void {
    this.getEmployees();
  }

  // método para obter a lista de funcionários do serviço EmployeeService
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

}
