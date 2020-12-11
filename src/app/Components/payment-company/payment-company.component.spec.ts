import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCompanyComponent } from './payment-company.component';

describe('PaymentCompanyComponent', () => {
  let component: PaymentCompanyComponent;
  let fixture: ComponentFixture<PaymentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
