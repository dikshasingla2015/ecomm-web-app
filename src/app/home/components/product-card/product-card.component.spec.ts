import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardModule } from 'primeng/card';
import { ProductModel } from 'src/app/core/models/product.model';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let product: ProductModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        RouterTestingModule,
        CardModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    product = {
      id: '1',
      name: 'Sports Shoes',
      brand: 'Reebok',
      color: 'White',
      price: 3500,
      description: 'dummy data test case',
      imageURL: '',
      features: '',
      category: 'Footwear',
      quantity: 5,
    };
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.productData = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct product', () => {
    component.productData = product;
    expect(component.productData.id).toBe('1');
  });

  it('should render the description of the product in the p tag', () => {
    component.productData = product;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('dummy data test case');
  });

  it('should navigate to product description page', () => {
    component.productData = product;
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.viewProductDescription('1');
    expect(navigateSpy).toHaveBeenCalledWith('/home/viewproduct/1');
  });

});
