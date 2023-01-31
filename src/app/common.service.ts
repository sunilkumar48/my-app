import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public count:number=0;
  public countSub:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor() { }
  setvalue(){
    this.countSub.next(this.count++);
  }
  getvalue(){
    return this.countSub.asObservable();
  }
}
