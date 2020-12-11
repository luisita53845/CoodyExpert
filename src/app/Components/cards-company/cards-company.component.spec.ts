import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCompanyComponent } from './cards-company.component';

describe('CardsCompanyComponent', () => {
  let component: CardsCompanyComponent;
  let fixture: ComponentFixture<CardsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
