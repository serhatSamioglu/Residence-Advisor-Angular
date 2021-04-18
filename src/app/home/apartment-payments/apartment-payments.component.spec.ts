import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentPaymentsComponent } from './apartment-payments.component';

describe('ApartmentPaymentsComponent', () => {
  let component: ApartmentPaymentsComponent;
  let fixture: ComponentFixture<ApartmentPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
