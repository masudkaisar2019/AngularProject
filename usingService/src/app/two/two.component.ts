import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  // @Output() datatoOne = new EventEmitter<number>();
  // @Input() dataFromOne;

  getData;
  someproperty: any;
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
    // this.count.updateData.subscribe(someproperty => this.someproperty = someproperty);
 }




}
