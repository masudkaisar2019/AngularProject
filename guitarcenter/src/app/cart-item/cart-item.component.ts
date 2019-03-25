import { CartService } from './../cart.service';
import { ManagerService } from './../manager.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() shoppingCart;
  @Input() quantity;
  totalPrice;

  constructor(private cartService: CartService ) {

  }

  ngOnInit() {

    this.totalPrice = this.cartService.total;
  }

}
