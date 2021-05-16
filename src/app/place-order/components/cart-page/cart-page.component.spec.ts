import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HttpLoaderFactory } from 'src/app/app.module';
import { Cart } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let dummyData: Cart[];
  let mockCartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartPageComponent
      ],
      providers: [
        CartService
      ],
      imports: [
        RouterTestingModule,
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
    dummyData = [
      {
        product: {
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
        quantity: 1
      },
      {
        product: {
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
        },
        quantity: 1
      }
    ];
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the products present in cart', () => {
    component.cartData = dummyData;
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'getCart').and.callFake(() => {
      return of(dummyData);
    });
    component.getCartDetails();
    expect(component.cartData.length).toBe(2);
    expect(mockCartService.getCart).toHaveBeenCalled();
  });

  it('should remove the product from cart', () => {
    component.cartData = dummyData;
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'removeProduct').and.callFake(() => {
      return of(dummyData[0]);
    });
    component.removeFromCart(0);
    expect(mockCartService.removeProduct).toHaveBeenCalled();
    expect(mockCartService.removeProduct).toHaveBeenCalledWith(0);
  });

  it('should get the total price of products present in the cart', () => {
    component.cartData = dummyData;
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'getTotalCartPrice').and.returnValue(100);
    component.getTotalPrice();
    expect(component.totalPrice).toBe(100);
    expect(mockCartService.getTotalCartPrice).toHaveBeenCalled();
  });

  it('should increase the quantity of products present in the cart', () => {
    component.cartData = dummyData;
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'incrementProductQuantity');
    spyOn(mockCartService, 'getCart').and.callFake(() => {
      dummyData[0].quantity = 2;
      return of(dummyData);
    });
    component.increaseQuantity(0);
    expect(component.cartData[0].quantity).toBe(2);
    expect(mockCartService.incrementProductQuantity).toHaveBeenCalled();
    expect(mockCartService.incrementProductQuantity).toHaveBeenCalledWith(0);
  });

  it('should decrease the quantity of products present in the cart', () => {
    dummyData[0].quantity = 2;
    component.cartData = dummyData;
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'decrementProductQuantity');
    spyOn(mockCartService, 'getCart').and.callFake(() => {
      dummyData[0].quantity = 1;
      return of(dummyData);
    });
    component.decreaseQuantity(0);
    expect(component.cartData[0].quantity).toBe(1);
    expect(mockCartService.decrementProductQuantity).toHaveBeenCalled();
    expect(mockCartService.decrementProductQuantity).toHaveBeenCalledWith(0);
  });

  it('should create cart row for each product in the cart', () => {
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'getCart').and.callFake(() => {
      return of(dummyData);
    });

    spyOn(mockCartService, 'getTotalCartPrice').and.returnValue(100);
    component.refreshCartData();
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('div')).length).toBe(38);
  });

  it('should generate empty content in the cart', () => {
    mockCartService = fixture.debugElement.injector.get(CartService);
    spyOn(mockCartService, 'getCart').and.callFake(() => {
      return of([]);
    });

    spyOn(mockCartService, 'getTotalCartPrice').and.returnValue(0);
    component.refreshCartData();
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('div')).length).toBe(2);
  });

  it('should navigate to checkout page', inject([Router], (router: Router) => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.checkout();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/placeorder/checkout');
  }));

  it('should not do anything when decrement is called with product quantity 1', () => {
    component.cartData = dummyData;
    mockCartService = fixture.debugElement.injector.get(CartService);
    component.decreaseQuantity(0);
    expect(component.cartData[0].quantity).toBe(1);
  });

});
