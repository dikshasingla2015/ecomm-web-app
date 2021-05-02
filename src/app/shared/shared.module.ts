import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
