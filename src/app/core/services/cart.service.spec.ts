import { TestBed } from '@angular/core/testing';
import { Cart } from '../models/cart.model';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  let dummyCart: Cart = {
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
    },
    quantity: 1
  };

  let dummyCart1: Cart = {
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
    },
    quantity: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should decrease the quantity of element of cart', () => {
    service.addProduct(dummyCart1);
    service.decrementProductQuantity(0);
    service.getCart().subscribe(res => expect(res[0].quantity).toEqual(0));
  });

  it('should clear cart', () => {
    service.addProduct(dummyCart);
    service.clearCart();
    service.getCart().subscribe(res => expect(res).toEqual([]));
  });

  it('should add product to the cart', () => {
    service.addProduct(dummyCart);
    service.getCart().subscribe(res => expect(res).toEqual([dummyCart]));
  });

  it('should get elements of cart', () => {
    service.addProduct(dummyCart);
    service.getCart().subscribe(res => expect(res).toEqual([dummyCart]));
  });

  it('should get total price of elements of cart', () => {
    service.addProduct(dummyCart);
    expect(service.getTotalCartPrice()).toBe(3500);
  });

  it('should remove product from the cart', () => {
    service.addProduct(dummyCart);
    service.removeProduct(0);
    service.getCart().subscribe(res => expect(res).toEqual([]));
  });

  it('should increase the quantity of element of cart', () => {
    service.addProduct(dummyCart);
    service.incrementProductQuantity(0);
    service.getCart().subscribe(res => expect(res[0].quantity).toEqual(2));
  });

});
