import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {NgxPaginationModule} from 'ngx-pagination';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductRatingsComponent } from './components/product-ratings/product-ratings.component';

const components = [
  HomePageComponent,
  MainPageComponent,
  ViewProductDetailsComponent,
  ProductCardComponent,
  ProductRatingsComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    CardModule,
    ButtonModule,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class HomeModule { }
