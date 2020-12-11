import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataUserComponent } from './update-data-user.component';

describe('UpdateDataUserComponent', () => {
  let component: UpdateDataUserComponent;
  let fixture: ComponentFixture<UpdateDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDataUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
