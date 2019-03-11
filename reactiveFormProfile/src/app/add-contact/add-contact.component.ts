import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  name = new FormControl('');
  newData;
  constructor(private data: DataService, private router: Router) { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(),
    address: new FormControl(''),
    id: new FormControl(),
  });

  createProfile() {
    // this.newData = this.profileForm.value.dataAdd();
    this.data.setProfile(this.profileForm.value);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
