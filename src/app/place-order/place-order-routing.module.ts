import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: 'cart', component: CartPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthGuard]
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
