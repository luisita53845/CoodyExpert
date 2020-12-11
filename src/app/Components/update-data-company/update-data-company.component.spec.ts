import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataCompanyComponent } from './update-data-company.component';

describe('UpdateDataCompanyComponent', () => {
  let component: UpdateDataCompanyComponent;
  let fixture: ComponentFixture<UpdateDataCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDataCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDataCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
