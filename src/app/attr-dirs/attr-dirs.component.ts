import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dirs',
  templateUrl: './attr-dirs.component.html',
  styleUrls: ['./attr-dirs.component.css']
})
export class AttrDirsComponent {
  isClassOneApply:boolean = false;
  isClassTwoApply:boolean = true;

  myColor:string = 'blue'
  myFont:string = '30px'
}
