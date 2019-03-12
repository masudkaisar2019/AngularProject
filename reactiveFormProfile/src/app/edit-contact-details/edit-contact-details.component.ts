import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact-details',
  templateUrl: './edit-contact-details.component.html',
  styleUrls: ['./edit-contact-details.component.css']
})
export class EditContactDetailsComponent implements OnInit {
  name = new FormControl('');
  id: number;
  private sub: any;
  alldata;
  displayData;
  target;
  constructor(private route: ActivatedRoute, private updatedataService: DataService, private router: Router) { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(),
    address: new FormControl(''),
    id: new FormControl(),
  });

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
    this.displayData = this.updatedataService.profiles;

    this.target = this.displayData.filter(obj => obj.id === this.id);
    this.profileForm.setValue({

      firstName: this.target[0].firstName,
      lastName: this.target[0].lastName,
      email: this.target[0].email,
      phoneNumber: this.target[0].phoneNumber,
      address: this.target[0].address,
      id: this.target[0].id,

    });


  }
  updateProfile() {
    this.router.navigate(['/home']);
    this.displayData.splice(0, 1, this.profileForm.value);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
