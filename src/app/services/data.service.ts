import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = "Hello All !"
  private dataSource = new BehaviorSubject<any>(this.data)
  dataObs$ = this.dataSource.asObservable()

  getDataFromComps(data:any){
     this.dataSource.next(data)
  }
}
