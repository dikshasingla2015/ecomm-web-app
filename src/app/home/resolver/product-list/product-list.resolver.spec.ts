import { TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/core/services/product/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductListResolver } from './product-list.resolver';

describe('ProductListResolver', () => {
  let resolver: ProductListResolver;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(ProductListResolver);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
