import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PrimaryInputComponent } from '../primary-input/primary-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { AlertService } from '../../service/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [
    NavBarComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id!: number;
  
  employeeService = inject(EmployeeService);
  alertService = inject(AlertService);
  private activateRoute: ActivatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  
  employee: Employee = new Employee();
  updateEmployeeForm!: FormGroup;

  constructor() {
    this.updateEmployeeForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      departamentId: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.updateEmployeeForm.patchValue({
          emailId: data.emailId,
          firstName: data.firstName,
          lastName: data.lastName,
          departamentId: data.departamentId
        });
      },
      error: (err) => {
        this.alertService.create("Error fetching employee details. Please try again.", "danger", "alert");
        console.log(err)
      }
    });
  }

  updateEmployee() {
    return this.employeeService.updateEmployee(this.id, this.updateEmployeeForm.value).subscribe({
      next: (data) => {
        this.alertService.create("Employee updated successfully!", "success", "alert");
        this.goToEmployeeList();
      },
      error: (err) => {
        this.alertService.create("Error updating employee. Please try again.", "danger", "alert");
        console.log(err)
      }
    });

  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.updateEmployee();
  }

}
