import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSignupComponent } from './shared-signup.component';

describe('SharedSignupComponent', () => {
  let component: SharedSignupComponent;
  let fixture: ComponentFixture<SharedSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
