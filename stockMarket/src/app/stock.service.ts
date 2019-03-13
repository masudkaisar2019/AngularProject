import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  // tslint:disable-next-line:prefer-const


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=aapl,goog,fb');
  }
}
