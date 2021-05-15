import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
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
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  const dummyProducts = [
    {
      id: '1',
      name: 'Sports Shoes',
      brand: 'Reebok',
      color: 'White',
      price: 3500,
      description: '',
      imageURL: '',
      features: '',
      category: 'Footwear',
      quantity: 5,
      ratings: 4
    }
  ];

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<ProductModel[]>', () => {

    service.getAllProducts().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpTestingController.match(`${service.PRODUCT_SERVICE_BASE_URL}/db.json`);
    expect(req.length).toBe(2);
  });

  it('should return a product with id', () => {

    service.getProductData('1').subscribe(product => {
      expect(product.id).toBe('1');
      expect(product).toEqual(dummyProducts[0]);
    });

    const req = httpTestingController.match(`${service.PRODUCT_SERVICE_BASE_URL}/db.json`);
    expect(req.length).toBe(2);
  });

});
