import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStep1Component } from './add-user-step1.component';

describe('AddUserStep1Component', () => {
  let component: AddUserStep1Component;
  let fixture: ComponentFixture<AddUserStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
