import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private objectSource = new BehaviorSubject<any>("Default");
  currentObj = this.objectSource.asObservable();

  constructor() { }

  sendObject(survey:any){
    this.objectSource.next(survey);
  }
}
