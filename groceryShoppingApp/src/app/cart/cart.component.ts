import { Subject } from 'rxjs';
import { GroceryManagerService } from './../grocery-manager.service';
import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title = 'Cart';
  items;
  cart;
  total;
  subTotal;


  constructor( private grocerService: GroceryManagerService) {
    this.total = 0.0;
  }


  ngOnInit() {
    this.grocerService.subject.subscribe((cart) => {
      this.cart = cart;
      this.items = Object.keys(cart);
      this.subTotal = cart['sum'];
    });
  }

}
