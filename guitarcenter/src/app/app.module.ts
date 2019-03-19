import { ManagerService } from './manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { GuitarComponent } from './guitar/guitar.component';
import { GuitarItemComponent } from './guitar-item/guitar-item.component';
import { GuitarDetailsComponent } from './guitar-details/guitar-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    NavBarComponent,
    HomeDisplayComponent,
    GuitarComponent,
    GuitarItemComponent,
    GuitarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
