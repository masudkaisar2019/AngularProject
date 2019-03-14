import { StockDataService } from './../stock-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Data } from '../main/dataItem';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  name = new FormControl('');
  dataInput;

  constructor( private data: StockDataService) { }

  ngOnInit() {
  }

  addStock() {

    this.data.getData(this.name.value).subscribe((data: Data[]) => {
      this.data.setmainData(data);

    });
  }
}
