import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { BulbsComponent } from './bulbs/bulbs.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    BulbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
