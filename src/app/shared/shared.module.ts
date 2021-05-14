import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ShowCategoryTreeComponent } from './components/show-category-tree/show-category-tree.component';

const components = [
  HeaderComponent,
  FooterComponent,
  SearchProductComponent
];

@NgModule({
  declarations: [
    components,
    ShowCategoryTreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
