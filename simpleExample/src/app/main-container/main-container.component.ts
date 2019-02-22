import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  myData = ['A', 'B', 'C', 'D', 'E'];
  addMyData(myInputData: string) {
    if (myInputData) {
      this.myData.push(myInputData);
    }
  }
  removeData() {
    this.myData.shift();
  }



  constructor() { }

  ngOnInit() {
  }

}
