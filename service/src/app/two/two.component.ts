import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

   getData() {
    return this.sharedService.get();
   }

  up1() {
  this.sharedService.countUp();
  }
  down1() {
   this.sharedService.countDown();

  }
  ngOnInit() {
  }

}
