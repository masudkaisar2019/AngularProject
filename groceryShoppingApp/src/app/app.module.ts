import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGroceryContainerComponent } from './main-grocery-container/main-grocery-container.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import { GroceryComponent } from './grocery/grocery.component';
import { CartComponent } from './cart/cart.component';
import {GroceryManagerService} from './grocery-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    MainGroceryContainerComponent,
    GroceryItemComponent,
    GroceryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GroceryManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
