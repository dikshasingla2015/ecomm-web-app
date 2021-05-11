import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productDataSubject = new BehaviorSubject<ProductModel[]>([]);

  readonly PRODUCT_SERVICE_BASE_URL = '/assets/templates';

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.productDataSubject.asObservable();
  }

  public getAllProducts(): Observable<ProductModel[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/db.json`;
    this.http.get<ProductModel[]>(url).subscribe(data => {
      this.productDataSubject.next(data);
    });
    return this.http.get<ProductModel[]>(url);
  }

  public getProductData(productId: string): Observable<ProductModel> {
    return this.getAllProducts().pipe(
      map(items =>
        items.filter(item => item.id === productId)[0]));
  }

  public getProductDataByName(name: string): void {
    this.getAllProducts().pipe(
      map(items =>
        items.filter(item => (item.name.toLowerCase()).includes(name.toLowerCase()))))
      .subscribe(data => {
        this.productDataSubject.next(data);
      });
  }
}
