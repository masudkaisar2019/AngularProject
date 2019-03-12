import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = new FormControl('');
  title = 'PROFILE LIST';
  getProfile;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.getProfile = this.dataService.profiles;
    // console.log(this.getProfile);
  }

  removeProfile() {
    this.getProfile.pop();
  }
  showProfile() {
    // console.log('i am showing your profile');
  }

}
