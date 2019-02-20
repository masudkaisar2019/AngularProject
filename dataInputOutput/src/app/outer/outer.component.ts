import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  @Input() dataFromOuter: string;



  constructor() { }

  ngOnInit() {
  }

}
