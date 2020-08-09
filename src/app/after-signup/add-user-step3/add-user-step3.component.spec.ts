import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStep3Component } from './add-user-step3.component';

describe('AddUserStep3Component', () => {
  let component: AddUserStep3Component;
  let fixture: ComponentFixture<AddUserStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
