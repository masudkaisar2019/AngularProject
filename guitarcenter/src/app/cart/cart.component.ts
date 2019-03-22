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
  displayData;
  price;
  image;
  name;
  itemNum;
  constructor(private route: ActivatedRoute, private cartItem: CartService , private manager: ManagerService) { }

  ngOnInit() {

    this.dataObject = this.cartItem.cart;
    this.guitars = this.manager.guiter;
    this.guitarKeys = Object.keys(this.dataObject);
    // console.log(this.dataObject)
    // this.displayData = this.guitars.filter((value) => {
    //     return value.guitar.id = this.dataObject;
    // });

    for (let num = 0; num < this.guitarKeys.length; num++) {
      this.dataToRender.push(this.guitars.filter((value) => {
      //  console.log(value);
            return value.id == this.guitarKeys[num];
        })[0]);
    }
    console.log(this.dataToRender);

    for ( let i = 0; i < this.dataToRender.length; i++) {
      this.name = this.dataToRender[i].name;
      this.price = this.dataToRender[i].price;
      this.itemNum = this.dataToRender[i].itemNum;
      this.image = this.dataToRender[i].image;


    }

    // console.log('-----------------');
    // console.log(this.guitarKeys);
    // console.log(this.dataObject);
    // // console.log(this.guitars);
    // console.log('-----------------');
  }

}
