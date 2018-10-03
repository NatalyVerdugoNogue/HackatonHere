import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountNameWorkComponent } from './create-account-name-work.component';

describe('CreateAccountNameWorkComponent', () => {
  let component: CreateAccountNameWorkComponent;
  let fixture: ComponentFixture<CreateAccountNameWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountNameWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountNameWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
