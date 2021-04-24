import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';

const components = [
  HomePageComponent,
  MainPageComponent,
  SearchProductComponent,
  ViewProductDetailsComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class HomeModule { }
