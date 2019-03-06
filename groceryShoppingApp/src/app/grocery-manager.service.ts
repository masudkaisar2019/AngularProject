import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryManagerService {
  cart = { };
  subject = new Subject();
  constructor() { }

  addItem(fruit: string, count: number) {
    this.cart[fruit] = count;
    this.subject.next(this.cart);
  }

  // public count = 0;
  // get() {
  //   return this.count;
  // }

  // countUp() {
  //   this.count++;
  // }
  // countDown() {
  //   this.count--;
  // }
}
