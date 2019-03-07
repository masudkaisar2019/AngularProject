import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-grocery-container',
  templateUrl: './main-grocery-container.component.html',
  styleUrls: ['./main-grocery-container.component.css']
})
export class MainGroceryContainerComponent implements OnInit {
  title = 'Grocery Shopping List';
  constructor() { }

  ngOnInit() {
  }

}
