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

  constructor(private groceryService: GroceryManagerService ) {
    this.count = 0;
  }
  countUp() {
    this.count++;
    this.groceryService.addItem(this.shoppingItems, this.count);
    console.log(this.shoppingItems);

  }
  countDown() {
    this.count--;
    this.groceryService.addItem(this.shoppingItems, this.count);
    console.log(this.shoppingItems);
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
