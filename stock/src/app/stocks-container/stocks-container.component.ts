import { Subject } from 'rxjs';
import { StockDataService } from './../stock-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks-container',
  templateUrl: './stocks-container.component.html',
  styleUrls: ['./stocks-container.component.css']
})
export class StocksContainerComponent implements OnInit {
  stockDataFromService;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit() {
      this.stockDataFromService = this.stockDataService.mainData;
  }

}
