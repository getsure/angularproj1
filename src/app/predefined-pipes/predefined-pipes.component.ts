import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefined-pipes',
  templateUrl: './predefined-pipes.component.html',
  styleUrls: ['./predefined-pipes.component.css']
})
export class PredefinedPipesComponent{
  myName:string = "suresh kumar"
  price:number = 20000
  sysDate:any = new Date()
  product:object = {id:101, name:'samsung tv'}
}
