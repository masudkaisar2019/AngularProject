import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ManageComponent } from './manage/manage.component';
import {StockDataService} from './stock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StockItemsComponent } from './stock-items/stock-items.component';
import { StocksContainerComponent } from './stocks-container/stocks-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ManageComponent,
    ManageItemComponent,
    TopBarComponent,
    StockItemsComponent,
    StocksContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
