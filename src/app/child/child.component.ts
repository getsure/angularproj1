import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() price:number= 0;
  @Output() customEvent: EventEmitter<number> = new EventEmitter<number>()

  widthdrawlAmt(){
     this.price--
     this.customEvent.emit(this.price)
  }

  savingAmt(){
    this.price++
    this.customEvent.emit(this.price)
  }
}
