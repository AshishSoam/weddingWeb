import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStep2Component } from './add-user-step2.component';

describe('AddUserStep2Component', () => {
  let component: AddUserStep2Component;
  let fixture: ComponentFixture<AddUserStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
