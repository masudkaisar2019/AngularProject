import { Component, OnInit } from '@angular/core';
import { StockDataService } from './../stock-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  stockData: Object;
  constructor(private dataShare: StockDataService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.stockData = this.dataShare.mainData;
  }


}
