import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DataViewModule } from 'primeng/dataview';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  HomePageComponent,
  MainPageComponent,
  ViewProductDetailsComponent
];

@NgModule({
  declarations: [
    components,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    TranslateModule
  ]
})
export class HomeModule { }
