import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Employee } from '../../employee';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../primary-input/primary-input.component";
import { EmployeeService } from '../../service/employee.service';
import { AlertService } from '../../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    NavBarComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employeeService = inject(EmployeeService);
  alertService = inject(AlertService);
  router = inject(Router);

  employee: Employee = new Employee();

  createEmployeeForm!: FormGroup;

  constructor() { 
    this.createEmployeeForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      departamentId: new FormControl('', Validators.required)
    });

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.createEmployeeForm.value).subscribe({
      next: (data) => {
        this.alertService.create("Employee created successfully!", "success", "alert");
        this.createEmployeeForm.reset();
      },
      error: (err) => {
        this.alertService.create("Error creating employee. Please try again.", "danger", "alert");
        console.log(err)
      }
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.saveEmployee();
  }




}
