import { CartService } from './../cart.service';
import { ManagerService } from './../manager.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar-details',
  templateUrl: './guitar-details.component.html',
  styleUrls: ['./guitar-details.component.css']
})
export class GuitarDetailsComponent implements OnInit, OnDestroy {
  itemArr: any = [];
  @Input() guiterDetail;
  id: number;
  private sub: any;
  alldata;

  constructor(private guitarData: ManagerService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // console.log(this.guiterDetail);


    this.sub = this.route.params.subscribe(params => {
      this.alldata = this.guitarData.getGuiterDetails(+params['id']);
          this.id = +params['id'];
          // console.log(this.alldata);
       });
  }

  getData() {
    return this.itemArr.length;
   }


  up() {
    this.guitarData.countUp();
    this.itemArr.push(this.alldata);
  }
  down() {
    this.guitarData.countDown();
    this.itemArr.pop(this.alldata);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAddToCart() {
    // this.cartService.addItem(this.itemArr);
    // // console.log(this.itemArr);
    // console.log(this.id);
    // console.log(this.itemArr.length);
    this.cartService.addToCart(this.id, this.itemArr.length);
  }

}






