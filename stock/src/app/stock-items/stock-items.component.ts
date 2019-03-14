import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-items',
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.css']
})
export class StockItemsComponent implements OnInit {
  @Input() stockItems;

  constructor() { }

  ngOnInit() {
  }

  changeCheck() {
    return this.stockItems.change < 0;
  }

}
