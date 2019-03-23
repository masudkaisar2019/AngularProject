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
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    NavBarComponent,
    HomeDisplayComponent,
    GuitarComponent,
    GuitarItemComponent,
    GuitarDetailsComponent,
    CartComponent,
    CartItemComponent,
    ThankYouComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
