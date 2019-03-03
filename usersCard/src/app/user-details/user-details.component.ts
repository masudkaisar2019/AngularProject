import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 @Input() detailsData;
 id: number;
 private sub: any;

 constructor(private route: ActivatedRoute) {}

 ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
     this.id = +params['id'];
     console.log(this.id);
    //  console.log(this.detailsData);
  });
}

ngOnDestroy() {
  this.sub.unsubscribe();
  // console.log(this.sub);
}

}
