import { GuitarDetailsComponent } from './guitar-details/guitar-details.component';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GuitarComponent } from './guitar/guitar.component';

const routes: Routes = [
  { path: 'home', component: HomeDisplayComponent},
  { path: 'guitar', component: GuitarComponent},
  { path: 'guitarDetails/:id', component: GuitarDetailsComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
