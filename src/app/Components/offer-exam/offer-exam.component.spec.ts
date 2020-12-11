import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferExamComponent } from './offer-exam.component';

describe('OfferExamComponent', () => {
  let component: OfferExamComponent;
  let fixture: ComponentFixture<OfferExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
