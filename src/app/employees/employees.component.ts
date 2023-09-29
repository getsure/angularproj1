import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Observable } from 'rxjs';

export interface IEmployee {
  empId: number;
  empName: string;
  empSal: number;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employeesList: IEmployee[] = [];
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployeesInfo().subscribe((res) => {
      //console.log(res)
      if (Array.isArray(res)) 
        this.employeesList = res;
      }
    );
  }
}
