import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDataResolver implements Resolve<ProductModel> {

  constructor(private readonly productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    const productId = route.paramMap.get('productId');
    return this.productService.getProductData(productId != null ? productId : '');
  }
}
