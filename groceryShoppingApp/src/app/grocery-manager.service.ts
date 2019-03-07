import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryManagerService {
  total: any;
  cart = { };
  subject = new Subject();
  subTotal = [];
  netTotal;
  finalTotal = 0;
  constructor() { }

  addItem(fruit: string, count: number, total: number, subTotal) {
    this.cart[fruit] = [count, total, subTotal];
    this.subTotal.push(this.cart[fruit][2]);
    this.netTotal = (a, b ) => {
      return a + b;
    };
    this.finalTotal = this.subTotal.reduce(this.netTotal);

    this.cart['sum'] = this.finalTotal;


    this.subject.next(this.cart);
  }
  removeItem(fruit: string, count: number, total: number, subTotal) {
    this.cart[fruit] = [count, total, subTotal];
    this.subTotal.pop(this.cart[fruit][2]);
    this.netTotal = (a, b ) => {
      return a + b;
    };
    this.finalTotal = this.subTotal.reduce(this.netTotal);

    this.cart['sum'] = this.finalTotal;


    this.subject.next(this.cart);
  }
}
