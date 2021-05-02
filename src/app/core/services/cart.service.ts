import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new BehaviorSubject<Cart[]>([]);

  constructor() { }

  addProduct(cart: Cart) {
    let cartData = this.cartSubject.getValue();
    let productItem = cartData.find(item => item.product.id === cart.product.id);
    productItem ? productItem.quantity += cart.quantity : cartData.push(cart);
    this.cartSubject.next(cartData);
  }

  removeProduct(index: number) {
    let cartData = this.cartSubject.getValue();
    cartData.splice(index, 1);
    this.cartSubject.next(cartData);
  }

  getTotalCartPrice(): number {
    let cartData = this.cartSubject.getValue();
    return cartData.reduce((totalPrice, item) => totalPrice + item.product.price * item.quantity, 0);
  }

  getCart(): Observable<Cart[]> {
    return this.cartSubject.asObservable();
  }

  incrementProductQuantity(index: number) {
    let cartData = this.cartSubject.getValue();
    cartData[index].quantity += 1;
    this.cartSubject.next(cartData);
  }

  decrementProductQuantity(index: number) {
    let cartData = this.cartSubject.getValue();
    cartData[index].quantity -= 1;
    this.cartSubject.next(cartData);
  }

}
