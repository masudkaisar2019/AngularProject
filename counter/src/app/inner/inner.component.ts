import { OuterComponent } from './../outer/outer.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  parentCount: any;
  @Input() count: number;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges () {
    if (this.count === 10) {
      this.countChanged.emit(this.count);
    }

  }
}
