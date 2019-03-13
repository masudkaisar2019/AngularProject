import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.css']
})
export class DisplayStockComponent implements OnInit {
  symbol;
  display: any;
  @Input() displayMyStock;

  constructor() { }

  ngOnInit() {

    // this.display = this.displayMyStock.filter(obj => obj.symbol === this.symbol);

    console.log(this.displayMyStock);

  }

}
