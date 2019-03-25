import { CartService } from './../cart.service';
import { ManagerService } from './../manager.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataToRender = [];
  dataObject: Object;
  guitars;
  guitarKeys: Array<string>;
  finalTotal;

  constructor(private route: ActivatedRoute, private cartItem: CartService , private manager: ManagerService) { }

  ngOnInit() {
    this.dataObject = this.cartItem.cart;
    this.guitars = this.manager.guiter;
    this.guitarKeys = Object.keys(this.dataObject);
    this.finalTotal = this.cartItem.netTotal;
    for (let num = 0; num < this.guitarKeys.length; num++) {
      this.dataToRender.push(this.guitars.filter((value) => {
            return value.id == this.guitarKeys[num];
        })[0]);
    }
  }

  clearCart() {
    console.log('clicked');
  }

}
