import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRatingsComponent } from './product-ratings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from 'primeng/card';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductRatingsComponent', () => {
  let component: ProductRatingsComponent;
  let fixture: ComponentFixture<ProductRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRatingsComponent],
      imports: [
        RouterTestingModule,
        CardModule,
        NgbModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingsComponent);
    component = fixture.componentInstance;
    component.starRating = 4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
