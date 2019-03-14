import { Data } from './main/dataItem';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  mainData = [];

  constructor(private http: HttpClient) {
  }
// ?symbols=aapl,goog,fb,ni'
  getData(code: string) {
    // console.log(code);
    const params = new HttpParams().set('symbols', code);
    return this.http.get
    ('https://angular2-in-action-api.herokuapp.com/stocks/snapshot', {params: params});

  }

  // getData() {
  //   return this.http.get('https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=');
  // }

  setmainData(data: Data[]) {
    this.mainData.push(data[0]);
    console.log(this.mainData);
  }

  // getmainData() {
  //   return this.mainData;
  // }

  deleteOneProfile(index) {
  // how to delet one data from array
  console.log(index);
  this.mainData.splice(index, 1);
    // this.mainData.pop();
  }

}
