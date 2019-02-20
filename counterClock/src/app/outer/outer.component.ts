import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  parentCount = 0;
  childData ;
  constructor() { }


  ngOnInit() {
  }

  countUp() {
    this.parentCount++;

  }

  countDown() {
    this.parentCount--;
  }

  changeData(data, ref1, ref2) {
    // disable button
      if (data) {
        ref1.disabled = true;
      } else {
        ref1.disabled = false;
      }
      // if (data) {
      //   ref2.disabled = true;
      // } else {
      //   ref2.disabled = false;
      // }
  }



}
