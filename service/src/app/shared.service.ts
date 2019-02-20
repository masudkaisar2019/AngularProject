import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() { }

  public count = 0;
  get() {
    return this.count;
  }

  countUp() {
    this.count++;
  }
  countDown() {
    this.count--;
  }

}
