import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartData: Cart[] = [];
  totalPrice: number = 0;

  constructor(private readonly cartService: CartService, private readonly router: Router) { }

  ngOnInit(): void {
    this.refreshCartData();
  }

  removeFromCart(index: number) {
    this.cartService.removeProduct(index);
    this.refreshCartData();
  }

  getCartDetails() {
    this.cartService.getCart().subscribe(data => {
      this.cartData = data;
    });
  }

  getTotalPrice() {
    this.totalPrice = this.cartService.getTotalCartPrice();
  }

  increaseQuantity(index: number) {
    this.cartService.incrementProductQuantity(index);
    this.refreshCartData();
  }

  decreaseQuantity(index: number) {
    if (this.cartData[index].quantity > 1) {
      this.cartService.decrementProductQuantity(index);
      this.refreshCartData();
    } else {
      this.removeFromCart(index);
    }
  }

  refreshCartData() {
    this.getCartDetails();
    this.getTotalPrice();
  }

}
