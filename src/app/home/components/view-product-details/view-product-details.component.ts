import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {

  product: any;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log("details", data);
      this.product = data.productData;
    })
  }

  addProductToCart(productId: string) {
    console.log(productId);
    this.router.navigateByUrl("/placeorder/cart");
  }

}
