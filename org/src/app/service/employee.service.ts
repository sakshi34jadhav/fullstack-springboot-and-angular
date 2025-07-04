import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`http://localhost:8080/employee`);
  }
  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:8080/getOneemployee/${id}`);

}
createEmployee(employee: Employee): Observable<string> {
  return this.http.post(`http://localhost:8080/PostEmployee`, employee, { responseType: 'text' });

}
updateEmployee(id: number, employee: Employee): Observable<any> {
  return this.http.put<any>(`http://localhost:8080/edited/${id}`, employee);
}
deleteEmployee(id: number): Observable<void> {
  return this.http.delete<void>(`http://localhost:8080/deleteemployee/${id}`);

}
}