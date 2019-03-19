import { ManagerService } from './../manager.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar-details',
  templateUrl: './guitar-details.component.html',
  styleUrls: ['./guitar-details.component.css']
})
export class GuitarDetailsComponent implements OnInit {
  @Input() guiterDetail;
  id: number;
  private sub: any;
  alldata;
  toDisplay;

  constructor(private guitarData: ManagerService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.alldata = this.guitarData.guiter;


    this.sub = this.route.params.subscribe(params => {
          this.id = +params['id'];
          console.log(this.id);

       });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}



// @Input() detailsData;
// id: number;
// private sub: any;
// alldata;
// constructor(private route: ActivatedRoute, private dataShare: SharedDataService) {}
// toDisplay;
// ngOnInit() {
//  this.dataShare.getData().subscribe(data => {
//    this.alldata = data;
//    this.toDisplay = this.alldata.filter(obj => obj.id === this.id)[0];

//    // console.log(this.toDisplay);
//  });

// }

