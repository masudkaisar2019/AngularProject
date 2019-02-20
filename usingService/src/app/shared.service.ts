import { Injectable } from '@angular/core';
// import { Observable, of, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  count = 0;
  data = new BehaviorSubject<number>(this.count);
  // updateData = this.data.asObservable();

  // count = 0;

  changeUpdate(newData) {
    return this.data.next(newData);
  }
  countUp() {
     this.count++;
     console.log(this.count);
     this.changeUpdate(this.count);
    //  return of(this.count);
  }
  countDown() {
     this.count--;
     console.log(this.count);
     this.changeUpdate(this.count);
    // return of(this.count);
  }
}
