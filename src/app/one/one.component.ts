import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  data:string = '';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dataObs$.subscribe(res => this.data = res)
  }

  sendDataToService(){
    this.dataService.getDataFromComps("Hi, This is one component !")
  }

}

