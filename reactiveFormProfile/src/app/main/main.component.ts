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
  profiles = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@gmail.com',
      phoneNumber: 7852489999,
      addres: 'Los Angeles'
    },
    {
      firstName: 'Kaite',
      lastName: 'Johnson',
      email: 'kaite@gmail.com',
      phoneNumber: 7852489999,
      addres: 'Miami FL'
    },
    {
      firstName: 'Masud',
      lastName: 'Khan',
      email: 'masud@gmail.com',
      phoneNumber: 7852489999,
      addres: 'Los Angeles'
    }
  ];

  constructor( private dataService: DataService) { }

  ngOnInit() {
  }

}
