import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  // changeUpdate: {};
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
    this.selection = this.circleData;
    console.log(this.inx);

   this.changeData.emit(this.inx);

    this.changeUpdate = {
      background: this.circleData.color
    };

  }


  ngOnInit() {
    // console.log(this.index);
  }

}
