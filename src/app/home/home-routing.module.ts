import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent,
    children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'viewproduct/:productId', component: ViewProductDetailsComponent
      }
    ],
  },
  {
    path: 'placeorder',
    loadChildren: () => import('../place-order/place-order.module').then(m => m.PlaceOrderModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
