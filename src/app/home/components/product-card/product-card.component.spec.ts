import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardModule } from 'primeng/card';
import { ProductModel } from 'src/app/core/models/product.model';

import { ProductCardComponent } from './product-card.component';
import { ButtonModule } from 'primeng/button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let product: ProductModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        RouterTestingModule,
        NgxPaginationModule,
        CardModule,
        ButtonModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    product = {
      id: '1',
      name: 'Sports Shoes',
      brand: 'Reebok',
      color: 'White',
      price: 3500,
      description: 'dummy data test case',
      imageURL: '',
      features: '',
      category: 'Footwear',
      quantity: 5,
      ratings: 4
    };
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.productData = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct product', () => {
    component.productData = product;
    expect(component.productData.id).toBe('1');
  });

  it('should render the description of the product in the p tag', () => {
    component.productData = product;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('dummy data test case');
  });

  it('should navigate to product description page', inject([Router], (router: Router) => {
    component.productData = product;
    spyOn(router, 'navigateByUrl').and.stub();
    component.viewProductDescription('1');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home/viewproduct/1');
  }));

});
