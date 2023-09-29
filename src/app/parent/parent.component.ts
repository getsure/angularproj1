import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  amount:number = 10000

  parentMethod(data:any){
    //console.log(data)
    this.amount = data
  }
}
