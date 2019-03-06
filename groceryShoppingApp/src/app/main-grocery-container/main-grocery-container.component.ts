import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-grocery-container',
  templateUrl: './main-grocery-container.component.html',
  styleUrls: ['./main-grocery-container.component.css']
})
export class MainGroceryContainerComponent implements OnInit {
  title: string = 'Grocery Shopping List';
  // shoppingList: any = ['Apple', 'Orenge', 'Banana', 'Grapes', 'Avocado', 'Peach'];
  constructor() { }

  ngOnInit() {
  }

}
