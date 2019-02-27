import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  changeUpdate: {};
  changeStyle: string;
@Input() inx;
@Input() circleData;
@Output() changeData = new EventEmitter();

@Input() selection;
selected;
  constructor() { }
  // changeColor() {
  //   return {
  //     background: this.circleData.color
  // };
  // }
  makeColor() {

    this.changeData.emit(this.inx);
    this.inx =  this.circleData.color;
    console.log(this.inx);
  }


  ngOnInit() {
    // console.log(this.index);
  }

}
