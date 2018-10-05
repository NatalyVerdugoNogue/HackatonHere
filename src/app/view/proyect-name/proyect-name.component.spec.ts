import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectNameComponent } from './proyect-name.component';

describe('ProyectNameComponent', () => {
  let component: ProyectNameComponent;
  let fixture: ComponentFixture<ProyectNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
