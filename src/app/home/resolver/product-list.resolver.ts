import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolver implements Resolve<ProductModel[]> {

  constructor(private readonly _productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel[]> {
    return this._productService.getAllProducts();
  }
}
