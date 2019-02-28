import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  dataStructure: any;
  name ;
  constructor(private httpClient: HttpClient) {
    this.dataStructure = this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any[]) => {
        console.log(data[0].name);
        this.name = data;
      }
    );

  }
  // getData() {
  //   this.dataStructure = this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
  //     (data: any[]) => {
  //       console.log(data[0].name);
  //       this.name = data;
  //     }
  //   );
  // }


  ngOnInit() {
  }

}
