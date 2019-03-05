import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from './../shared-data.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 @Input() detailsData;
 id: number;
 private sub: any;
 alldata;
 constructor(private route: ActivatedRoute, private dataShare: SharedDataService) {}
 toDisplay;
 ngOnInit() {
  this.dataShare.getData().subscribe(data => {
    this.alldata = data;
    this.toDisplay = this.alldata.filter(obj => obj.id === this.id)[0];

    // console.log(this.toDisplay);
  });

  this.sub = this.route.params.subscribe(params => {
    // console.log(params);
     this.id = +params['id'];
    //  console.log(this.id);
    //  console.log(this.detailsData);
  });
}

  ngOnDestroy() {
    this.sub.unsubscribe();
    // console.log(this.sub);
  }

}
