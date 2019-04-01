
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total;
  subtotal = [];
  netTotal;
  totalCart = [];
  displayCart;

  cart = {};

  constructor() { }

  addToCart(id, quantity, data) {

    if (this.cart[id]) {
      this.cart[id] = this.cart[id] + quantity;
      this.totalCart.push(quantity);
      console.log(this.totalCart);
      this.displayCart = this.totalCart.reduce( (x, y) => {
        return x + y;
      });
      console.log(this.displayCart);
      this.total =  quantity * data.price;
      console.log('total', this.total);
      this.subtotal.push( this.total);
      this.netTotal = this.subtotal.reduce((a, b) => {
        return a + b;
      });

    } else {
      this.cart[id] = quantity;
      this.totalCart.push(quantity);
      console.log(this.totalCart);
      this.displayCart = this.totalCart.reduce( (x, y) => {
        return x + y;
      });
      console.log(this.displayCart);
      this.total =  quantity * data.price;
      console.log('total', this.total);

      this.subtotal.push( this.total);
      this.netTotal = this.subtotal.reduce((a, b) => {
        return a + b;
      });

    }
  }

  clearCart() {
    this.cart = this.cart;
  }


}
