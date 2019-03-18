import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BoardComponent } from './board/board.component';
import { SqureComponent } from './squre/squre.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BoardComponent,
    SqureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
