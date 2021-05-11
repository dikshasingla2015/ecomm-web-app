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
  totalPrice = 0;

  constructor(private readonly cartService: CartService, private readonly router: Router) { }

  ngOnInit(): void {
    this.refreshCartData();
  }

  removeFromCart(index: number): void {
    this.cartService.removeProduct(index);
    this.refreshCartData();
  }

  getCartDetails(): void {
    this.cartService.getCart().subscribe(data => {
      this.cartData = data;
    });
  }

  getTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalCartPrice();
  }

  increaseQuantity(index: number): void {
    this.cartService.incrementProductQuantity(index);
    this.refreshCartData();
  }

  decreaseQuantity(index: number): void {
    if (this.cartData[index].quantity > 1) {
      this.cartService.decrementProductQuantity(index);
      this.refreshCartData();
    } else {
      this.removeFromCart(index);
    }
  }

  refreshCartData(): void {
    this.getCartDetails();
    this.getTotalPrice();
  }

  checkout(): void {
    this.router.navigateByUrl('/placeorder/checkout');
  }

}
