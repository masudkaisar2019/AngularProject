import { StockService } from './../stock.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stockData;

  constructor( private stock: StockService, private httpClient: HttpClient) { }

  ngOnInit() {
    // this.stockData = this.stock.getData();

    this.stock.getData().subscribe(data => {this.stockData = data; });


  }

  // ngDoCheck() {

  //   console.log(this.stockData);

  // }

}
