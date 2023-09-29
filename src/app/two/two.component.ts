import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  data:string = '';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dataObs$.subscribe(res => this.data = res)
  }

}
