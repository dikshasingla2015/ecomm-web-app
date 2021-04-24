import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_SERVICE_BASE_URL = "/assets/templates";

  constructor(private readonly _http: HttpClient) { }

  public getAllProducts(): Observable<ProductModel[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/db.json`;
    return this._http.get<ProductModel[]>(url);
  }

  public getProductData(productId: string): Observable<ProductModel> {
    return this.getAllProducts().pipe(
      map(items =>
        items.filter(item => item.id === productId)[0]))
  }
}
