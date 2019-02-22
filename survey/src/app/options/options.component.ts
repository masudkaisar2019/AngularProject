import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

@Input() options;
  constructor( private el: ElementRef) {
  }
  changeColor() {
    // return this.options.color;
    this.el.nativeElement.style.backgroundColor = this.options.color;
    console.log(this.options.color);
  }



  ngOnInit() {
  }

}
