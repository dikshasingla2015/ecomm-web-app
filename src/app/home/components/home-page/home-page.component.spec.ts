import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { of } from 'rxjs';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockProductService: ProductService;
  let dummyProducts: ProductModel[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        ProductCardComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
          {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                productList: dummyProducts,
              }),
            }
          }
        },
        ProductService
      ],
      imports: [
        RouterTestingModule,
        CardModule,
        ButtonModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        HttpClientModule,
        NgxPaginationModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    dummyProducts = [
      {
        id: '1',
        name: 'Sports Shoes',
        brand: 'Reebok',
        color: 'White',
        price: 3500,
        description: '',
        imageURL: '',
        features: '',
        category: 'Footwear',
        quantity: 5,
        ratings: 4
      },
      {
        id: '2',
        name: 'Samsung Galaxy',
        brand: 'Samsung',
        color: 'White',
        price: 3500,
        description: '',
        imageURL: '',
        features: '',
        category: 'Mobile',
        quantity: 5,
        ratings: 4
      }
    ];
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set products data correctly from the service', () => {
    mockProductService = fixture.debugElement.injector.get(ProductService);
    spyOn(mockProductService, 'getProducts').and.callFake(() => {
      return of(dummyProducts);
    });
    expect(component.products.length).toBe(2);
  });

  it('should render each product as product card component', () => {
    const productCardDE = fixture.debugElement.queryAll(By.directive(ProductCardComponent));
    expect(productCardDE.length).toBe(2);
    for (let i = 0; i < productCardDE.length; i++) {
      expect(productCardDE[i].componentInstance.productData).toEqual(dummyProducts[i]);
    }
  });

});
