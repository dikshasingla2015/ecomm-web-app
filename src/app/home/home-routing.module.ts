import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ProductDataResolver } from './resolver/product-data/product-data.resolver';
import { ProductListResolver } from './resolver/product-list/product-list.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent,
    children: [
      {
        path: '', component: HomePageComponent, resolve: {
          productList: ProductListResolver
        }
      },
      {
        path: 'viewproduct/:productId', component: ViewProductDetailsComponent, resolve: {
          productData: ProductDataResolver
        }
      }
    ],
  },
  {
    path: 'placeorder',
    loadChildren: () => import('../place-order/place-order.module').then(m => m.PlaceOrderModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
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
