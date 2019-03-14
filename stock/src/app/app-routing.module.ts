import { StocksContainerComponent } from './stocks-container/stocks-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: 'manage', component: ManageComponent},
  // { path: 'stocksContainer', component: StocksContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
