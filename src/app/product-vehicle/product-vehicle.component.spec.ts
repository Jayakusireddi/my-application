import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVehicleComponent } from './product-vehicle.component';

describe('ProductVehicleComponent', () => {
  let component: ProductVehicleComponent;
  let fixture: ComponentFixture<ProductVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
