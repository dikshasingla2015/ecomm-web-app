import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';


@NgModule({
  declarations: [
    HomePageComponent,
    MainPageComponent,
    SearchProductComponent,
    ViewProductDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
