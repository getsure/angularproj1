import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-dirs',
  templateUrl: './struct-dirs.component.html',
  styleUrls: ['./struct-dirs.component.css']
})
export class StructDirsComponent {
   isAvailableProduct:boolean = false;   
   names:string[] = ["chiru","vihaan","varshini"]
   employees = [
    { empId:101, empName:'chiru', empSal:30000},
    { empId:102, empName:'vihaan', empSal:20000},
    { empId:103, empName:'varshini', empSal:40000}
   ]
}
