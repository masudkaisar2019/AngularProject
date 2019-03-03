import { MainContainerComponent } from './main-container/main-container.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsercardComponent } from './usercard/usercard.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'userDashbord', component: MainContainerComponent },
  { path: 'userCard', component: UsercardComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  // { path: 'product-details/:id', component: ProductDetails }
  // { path: '/:dataFromMain.id'}, Component : UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
