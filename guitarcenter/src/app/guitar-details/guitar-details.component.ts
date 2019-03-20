import { ManagerService } from './../manager.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar-details',
  templateUrl: './guitar-details.component.html',
  styleUrls: ['./guitar-details.component.css']
})
export class GuitarDetailsComponent implements OnInit, OnDestroy {
  @Input() guiterDetail;
  id: number;
  private sub: any;
  alldata;

  constructor(private guitarData: ManagerService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.guiterDetail);


    this.sub = this.route.params.subscribe(params => {
      this.alldata = this.guitarData.getGuiterDetails(+params['id']);
          this.id = +params['id'];
          console.log(this.id);
          console.log(this.alldata);
       });
  }

  getData() {
    return this.guitarData.get();
   }


  up() {
    this.guitarData.countUp();
  }
  down() {
    this.guitarData.countDown();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}






