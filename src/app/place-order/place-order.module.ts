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
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';

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
    TableModule,
    CardModule,
    TranslateModule
  ]
})
export class PlaceOrderModule { }
