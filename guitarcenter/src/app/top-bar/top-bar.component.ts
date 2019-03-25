import { CartService } from './../cart.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit , DoCheck {
  showCart;

  constructor( private cartItem: CartService) {
   }

  ngDoCheck() {
    this.showCart = this.cartItem.displayCart;
  }
  ngOnInit() {




  }

}
