import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bulbs',
  templateUrl: './bulbs.component.html',
  styleUrls: ['./bulbs.component.css']
})
export class BulbsComponent implements OnInit {
  @Input() onStartValue: number ;



  constructor() { }

  ngOnInit() {
  }

}
