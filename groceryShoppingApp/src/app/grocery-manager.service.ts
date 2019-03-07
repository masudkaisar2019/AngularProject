import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryManagerService {
  total: any;
  cart = { };
  price;
  subject = new Subject();
  constructor() { }

  addItem(fruit: string, count: number, total: number) {
    // this.cart[fruit] = count;
    // this.price = this.total;
    this.cart[fruit] = [count, total];
    this.subject.next(this.cart);
    // console.log('fromService' + this.cart);
    // console.log(this.total);
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
