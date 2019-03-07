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
  subTotal;
  netTotal;
  finalTolal;

  constructor(private groceryService: GroceryManagerService ) {
    this.count = 0;
  }
  countUp() {
    this.count++;
    this.total = this.count * this.shoppingItems[1];
    this.subTotal = this.shoppingItems[1];
    this.groceryService.addItem(this.shoppingItems, this.count, this.total, this.subTotal);
  }

  countDown() {
    this.count--;
    this.total = this.count * this.shoppingItems[1];
    this.subTotal = this.shoppingItems[1];
    this.groceryService.removeItem(this.shoppingItems, this.count, this.total, this.subTotal);
  }

  ngOnInit() {
  }

}
