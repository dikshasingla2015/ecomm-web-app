import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.products = data.productList;
    })
  }

  viewProductDescription(productId: string) {
    this.router.navigateByUrl("/home/viewproduct/" + productId);
  }
}
