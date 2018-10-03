import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPlaceComponent } from './your-place.component';

describe('YourPlaceComponent', () => {
  let component: YourPlaceComponent;
  let fixture: ComponentFixture<YourPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
