import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';


@NgModule({
  declarations: [
    CartPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    CommonModule,
    PlaceOrderRoutingModule
  ]
})
export class PlaceOrderModule { }
