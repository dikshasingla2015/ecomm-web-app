import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private readonly route: ActivatedRoute,
    private readonly productService: ProductService) { }

  ngOnInit(): void {

    this.getProductsData();

    this.route.data.subscribe(data => {
      this.products = data.productList;
    });

  }

  getProductsData(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
