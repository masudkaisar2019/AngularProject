import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from './main/profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subject: Subject<any>;
  profiles = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@gmail.com',
      phoneNumber: 7852489999,
      addres: 'Los Angeles',
      id: 1
    },
    {
      firstName: 'Kaite',
      lastName: 'Johnson',
      email: 'kaite@gmail.com',
      phoneNumber: 7852489999,
      addres: 'Miami FL',
      id: 2
    },
    {
      firstName: 'Masud',
      lastName: 'Khan',
      email: 'masud@gmail.com',
      phoneNumber: 7852489999,
      addres: 'Los Angeles',
      id: 3
    }
  ];

  constructor() {}
  // dataAdd(newData) {
  //   this.subject.next(newData);
  // }

  getProfile() {
    this.subject.next(this.profiles);
  }

  setProfile(profile: Profile) {
    this.profiles.push(profile);
  }
}
