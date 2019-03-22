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
  @Input() name;
  @Input() image;
  @Input() price;
  quantity;
  total;
  id;

  constructor( private managerData: ManagerService, private cartService: CartService) { }

  ngOnInit() {
    // this.quantity = this.managerData.get();
    // this.total = this.shoppingCart.price * this.quantity;
    // this.quantity = this.cartService.addToCart(this.id, this.quantity);
    // this.quantity = this.cartService.quantityOfItem;
    // this.total = this.cartService.total;
    // console.log( this.quantity);
  }

}
