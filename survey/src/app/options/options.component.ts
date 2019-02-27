import { Component, OnInit, Input, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
@Input() options;
@Output() select: any;

selected = -1;

takeIndex(i) {

    this.selected = i;
  }
  constructor( private el: ElementRef) {
  }
  changeColor() {
    this.select = this.options.color;
    // console.log(this.select.length);
    // // return this.options.color;
    // this.el.nativeElement.style.backgroundColor = this.options.color;
    // // console.log(this.options.color);
    // console.log(this.el.nativeElement.style.backgroundColor);
  }
  // // public color: 'black';
  // // changeColor() {
  // //   // this.options.color = this.options.color[Math.floor(Math.random() * this.options.length)];
  // //   console.log(this.options.color.length);
  // // }
//   private list: any = [
//     'red', ' yellow', 'blue'
// ];
// private list: any = [
//   'red', ' yellow', 'blue'
// ];
//   public color: 'black';
//   changeColor() {
//     this.color = this.list[Math.floor(Math.random() * this.list.length)];
//   }




  ngOnInit() {
    // console.log(this.options.choice);
  }

}
