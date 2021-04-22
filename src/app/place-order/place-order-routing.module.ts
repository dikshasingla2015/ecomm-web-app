import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: 'cart', component: CartPageComponent
  },
  {
    path: 'checkout', component: CheckoutPageComponent
  },
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceOrderRoutingModule { }
