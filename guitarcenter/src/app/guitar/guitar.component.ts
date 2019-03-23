import { ManagerService } from './../manager.service';
import { Component, OnInit } from '@angular/core';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  guitarData;
  filterForm: FormGroup;

  constructor( private managerService: ManagerService) { }

  ngOnInit() {
    this.guitarData = this.managerService.guiter;
    this.filterForm = new FormGroup({
      'electric': new FormControl(null),
      'acoustic': new FormControl(null)
    });
  }

}
