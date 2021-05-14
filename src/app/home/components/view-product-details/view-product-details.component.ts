import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {

  product: any;

  addToCartClick = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly cartService: CartService) {
    this.addToCartClick = false;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.product = data.productData;
    });
  }

  addToCart(): void {
    const cartData: Cart = { product: this.product, quantity: 1 } as Cart;
    this.cartService.addProduct(cartData);
    this.addToCartClick = true;
  }

  viewCart(): void {
    this.router.navigateByUrl('/placeorder/cart');
  }

  onCancelClick(): void {
    this.router.navigateByUrl('/');
  }
}
