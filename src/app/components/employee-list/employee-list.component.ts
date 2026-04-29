import { Component, inject } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
import { AlertService } from '../../service/alert.service';

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
  
  // injeção de dependência do serviço EmployeeService para obter os dados dos funcionários
  employeeService = inject(EmployeeService);
  alertService = inject(AlertService);
  router = inject(Router);
  
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

  // método para navegar para a página de atualização de funcionário, passando o ID do funcionário como parâmetro
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  // método para excluir um funcionário, chamando o método deleteEmployee do serviço EmployeeService e atualizando a lista de funcionários após a exclusão
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getEmployees();
        this.alertService.create("Employee deleted successfully!", "success", "alert");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
