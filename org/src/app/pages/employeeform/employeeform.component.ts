import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employeeform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,private router: Router,private route: ActivatedRoute) {
    this.form = this.fb.group({
      name: "",
      experience: ""
});
  }

  id: number=0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.employeeService.getById(this.id).subscribe(data => this.form.patchValue(data));
    }
  }

  onSubmit() {
const employee = this.form.value;
    const newId$ = this.id? this.employeeService.updateEmployee(this.id, employee): this.employeeService.createEmployee(employee);
    newId$.subscribe(() => {this.router.navigateByUrl('/')});
  }
}
