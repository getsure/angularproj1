import { Component} from '@angular/core';

@Component({
  selector: 'app-interpol-binding',
  templateUrl: './interpol-binding.component.html',
  styleUrls: ['./interpol-binding.component.css']
})
export class InterpolBindingComponent{
  name:string= "suresh kumar"
  age:number = 30
  getEmployeeDetails(){
    alert('calling...')
  }

}
