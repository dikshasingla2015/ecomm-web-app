import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    CommonModule,
    PlaceOrderRoutingModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ]
})
export class PlaceOrderModule { }
