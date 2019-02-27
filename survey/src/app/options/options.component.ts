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

  }


  ngOnInit() {
  }

}
