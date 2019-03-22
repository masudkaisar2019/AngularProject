
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data;

  cart = {};

  constructor() { }
  addToCart(id, quantity) {
    // console.log(id, quantity, alldata.price);

    if (this.cart[id]) {
      // if we already have some quantity for that particular guitar
      this.cart[id] = this.cart[id] + quantity;
    } else {
      // if we don't has it at all
      this.cart[id] = quantity;

    }
  }
}
