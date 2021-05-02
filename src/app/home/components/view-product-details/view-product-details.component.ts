import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {

  product: any;

  addToCartClick: boolean = false;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router,
    private readonly cartService: CartService) {
    this.addToCartClick = false;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.productData;
    })
  }

  addToCart() {
    let cartData = { "product": this.product, "quantity": 1 };
    this.cartService.addProduct(cartData);
    this.addToCartClick = true;
  }

  ViewCart() {
    this.router.navigateByUrl("/placeorder/cart");
  }
}
