import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employeelist',
  imports: [RouterModule, CommonModule],
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee: Employee[] = [];

  constructor(private employeeservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

getEmployee(): void {
    this.employeeservice.getAllEmployee().subscribe((data: Employee[]) => {
      this.employee = data;
    });
  }

  addEmployee(): void {
    this.router.navigate(['/employeeform']);
  }

  editEmployee(id: number): void {
  this.router.navigate(['/employeeform', id]);
}


  deleteEmployee(id: number): void {
    this.employeeservice.deleteEmployee(id).subscribe(() => {
      this.getEmployee(); // refresh the employee list
    });
  }
}
