import { Component, OnInit } from '@angular/core';
import {GroceryManagerService} from './../grocery-manager.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  itemList: any = [['Apple', 1.5], ['Orenge', 1.20], ['Banana', .50], ['Grapes', 1.30], ['Avocado', 2.00], ['Peach', 1.5]];
  // price: any = [2, 3, 4, 5, 6, 2];


  constructor(private groceryService: GroceryManagerService ) {
    // console.log(this.itemList[0][1]);
  }

  // getData() {
  //   return this.groceryService.get();
  //  }

  // up1() {
  // this.groceryService.countUp();
  // }
  // down1() {
  //  this.groceryService.countDown();

  // }

  ngOnInit() {
  }

}
