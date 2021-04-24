import { TestBed } from '@angular/core/testing';

import { ProductDataResolver } from './product-data.resolver';

describe('ProductDataResolver', () => {
  let resolver: ProductDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
