import { Data } from './dataItem';
import { StockDataService } from './../stock-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() getDataInput;
  getStockData;
  title = 'Welcome to Stock apps';
  newData = [];


  constructor(private httpClient: HttpClient, private stock: StockDataService) { }

  ngOnInit() {
  //   const code = '';
  //   this.stock.getData(code).subscribe((data: Array<Data>) => {this.stock.setmainData(data);
  // });
  }



  setProfile(data: Data) {
    this.getDataInput.push(data);
  }

}
