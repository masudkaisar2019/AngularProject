import { Component, OnInit } from '@angular/core';
import {GroceryManagerService} from './../grocery-manager.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  itemList: any = ['Apple', 'Orenge', 'Banana', 'Grapes', 'Avocado', 'Peach'];


  constructor(private groceryService: GroceryManagerService ) { }

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
