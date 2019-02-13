
import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit {
  @Input()numberOfBulbs: number;


  onStateValue: boolean ;

  toggle() {
    this.onStateValue = !this.onStateValue ;
  }

  constructor() { }

  ngOnInit() {
  }

}
