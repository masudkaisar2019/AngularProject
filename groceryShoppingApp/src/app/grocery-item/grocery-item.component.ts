import { Component, OnInit, Input } from '@angular/core';
import {GroceryManagerService} from './../grocery-manager.service';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  @Input() shoppingItems;
  count: number;
  total;

  constructor(private groceryService: GroceryManagerService ) {
    this.count = 0;
    // console.log(this.shoppingItems[0][1]);
  }
  countUp() {
    this.count++;
    this.total = this.count * this.shoppingItems[1];
    this.groceryService.addItem(this.shoppingItems, this.count, this.total);
    // console.log(this.shoppingItems);
    // console.log(this.count);
    // console.log(this.shoppingItems[1]);
    // this.total = this.count * this.shoppingItems[1];
    // console.log(this.shoppingItems[0] + ' is ' + this.total);


  }
  countDown() {
    this.count--;
    this.total = this.count * this.shoppingItems[1];
    this.groceryService.addItem(this.shoppingItems, this.count, this.total);
    // this.total = this.count * this.shoppingItems[1];
    console.log(this.shoppingItems[0] + ' is ' + this.total);
    // console.log(this.shoppingItems);
    // console.log(this.count);
  }
  // getData() {
  //   return this.groceryService.get();
  //  }
  //   up1() {
  // this.groceryService.countUp();
  // }
  // down1() {
  //  this.groceryService.countDown();

  // }

  ngOnInit() {
  }

}
