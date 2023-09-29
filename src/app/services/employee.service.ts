import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private employeesRestUrl:string = 'assets/employees.json'
   constructor(private httpClient:HttpClient){}
   getEmployeesInfo():Observable<IEmployee>{    
     return this.httpClient.get<IEmployee>(this.employeesRestUrl)
   }
}
