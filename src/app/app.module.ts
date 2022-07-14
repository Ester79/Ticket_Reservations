import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http module
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

// Service
import { TicketsService } from './services/tickets.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
