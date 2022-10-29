import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagrnotfoundComponent } from './pagrnotfound.component';

describe('PagrnotfoundComponent', () => {
  let component: PagrnotfoundComponent;
  let fixture: ComponentFixture<PagrnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagrnotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagrnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
