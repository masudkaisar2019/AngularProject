import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  @Input() count ;
  @Output() changeCount: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }


  ngOnChanges() {

    if (this.count === 10) {
      this.changeCount.emit(true);
    } else {
      this.changeCount.emit(false);
    }
    // if (this.count === 0) {
    //   this.changeCount.emit(true);
    // } else {
    //   this.changeCount.emit(false);
    // }

  // }

  }

}
