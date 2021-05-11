import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  productData!: ProductModel;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  viewProductDescription(productId: string): void {
    this.router.navigateByUrl('/home/viewproduct/' + productId);
  }

}
