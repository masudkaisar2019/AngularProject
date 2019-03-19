import { ManagerService } from './../manager.service';
import { Component, OnInit } from '@angular/core';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';


@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  guitarData;

  constructor( private managerService: ManagerService) { }

  ngOnInit() {
    this.guitarData = this.managerService.guiter;
    // console.log(this.guitarData );
  }

}
