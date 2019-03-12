import { AddContactComponent } from './add-contact/add-contact.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditContactDetailsComponent } from './edit-contact-details/edit-contact-details.component';

const routes: Routes = [
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: 'addContact', component: AddContactComponent },
  { path: 'editContactDetails', component: EditContactDetailsComponent  },
  { path: 'editContactDetails/:id', component: EditContactDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
