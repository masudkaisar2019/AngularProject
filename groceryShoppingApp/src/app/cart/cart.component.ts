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
  @Input() displayItem: string;

  constructor( private grocerService: GroceryManagerService) { }

  ngOnInit() {
    this.grocerService.subject.subscribe((cart) => {
      this.cart = cart;
      this.items = Object.keys(cart);
    });

  }

}
