import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTable2Component } from './main-table2.component';

describe('MainTable2Component', () => {
  let component: MainTable2Component;
  let fixture: ComponentFixture<MainTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
