import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTable3Component } from './main-table3.component';

describe('MainTable3Component', () => {
  let component: MainTable3Component;
  let fixture: ComponentFixture<MainTable3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTable3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
