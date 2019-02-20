import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

   getData() {
    return this.sharedService.get();
   }

  up() {
  this.sharedService.countUp();
  }
  down() {
   this.sharedService.countDown();

  }

  ngOnInit() {
  }


}
