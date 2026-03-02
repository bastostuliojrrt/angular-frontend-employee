import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Employee } from '../../employee';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../primary-input/primary-input.component";

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

  onSubmit() {
    console.log(this.createEmployeeForm.value);
  }


}
