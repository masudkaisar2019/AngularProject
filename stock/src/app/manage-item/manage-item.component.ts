import { StockDataService } from './../stock-data.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {
  stockData: Object;
  @Input() stockItem;
  @Input() index;

  constructor( private stock: StockDataService) { }

  deleteStock() {
    console.log('I am deletig stock');
    this.stock.deleteOneProfile(this.index);

  }

  ngOnInit() {
  }

}
