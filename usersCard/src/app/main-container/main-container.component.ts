import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  headline = 'User Dashboad';
  dataStructure: any;
  name ;
  constructor(private httpClient: HttpClient, private dataShare: SharedDataService) {



  }
  ngOnInit() {
     this.dataShare.getData().subscribe(data => {this.name = data});

  }

}
