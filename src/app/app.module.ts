import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    HeaderComponent,
    ShopComponent,
    FruitsComponent,
    ContactsComponent,
    CartComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
