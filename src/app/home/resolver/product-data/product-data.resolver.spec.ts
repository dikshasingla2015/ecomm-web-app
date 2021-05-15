import { TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/core/services/product/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductDataResolver } from './product-data.resolver';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDataResolver', () => {
  let resolver: ProductDataResolver;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    resolver = TestBed.inject(ProductDataResolver);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
