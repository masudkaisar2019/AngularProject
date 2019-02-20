import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  // @Input() dataFromTwo: Number;
 someproperty: any;
 getData;
 constructor(private count: SharedService) {
  this.count.data.subscribe((data) => {
  console.log('data' + data );
  this.someproperty = data;
    });
 }
 increase() {
  console.log('clicked up two');
  this.count.countUp();
  // this.someproperty = this.count.count;
  console.log(this.someproperty);
}

decrease() {
  console.log('clicked down two');
  this.count.countDown();
  // this.someproperty = this.count.count;
  console.log(this.someproperty);
}

 ngOnInit() {

//   this.count.updateData.subscribe(someproperty => this.someproperty = someproperty);
}


}
