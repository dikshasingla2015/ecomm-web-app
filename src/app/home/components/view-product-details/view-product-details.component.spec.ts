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
import { CartService } from 'src/app/core/services/cart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ViewProductDetailsComponent } from './view-product-details.component';
import { ProductRatingsComponent } from '../product-ratings/product-ratings.component';

describe('ViewProductDetailsComponent', () => {
  let component: ViewProductDetailsComponent;
  let fixture: ComponentFixture<ViewProductDetailsComponent>;
  let dummyProduct: ProductModel;
  let mockCartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewProductDetailsComponent,
        ProductRatingsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
          {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                productData: dummyProduct,
              }),
            }
          }
        },
        CartService
      ],
      imports: [
        RouterTestingModule,
        ButtonModule,
        CardModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        HttpClientModule,
        NgbModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    dummyProduct = {
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
    };
    fixture = TestBed.createComponent(ViewProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add product to the cart', () => {
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'addProduct').and.callFake(() => {
      return of(true);
    });
    component.addToCart();
    expect(mockCartService.addProduct).toHaveBeenCalled();
  });

  it('should navigate to cart page when clicked on view cart', () => {
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.viewCart();
    expect(navigateSpy).toHaveBeenCalledWith('/placeorder/cart');
  });

  it('should navigate to home page when clicked on cancel', () => {
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.onCancelClick();
    expect(navigateSpy).toHaveBeenCalledWith('/');
  });

  it('should render each div for product details', () => {
    expect(fixture.debugElement.queryAll(By.css('div')).length).toBe(8);
  });

});
