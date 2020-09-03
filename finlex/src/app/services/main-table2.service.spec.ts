import { TestBed } from '@angular/core/testing';

import { MainTable2Service } from './main-table2.service';

describe('MainTable2Service', () => {
  let service: MainTable2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTable2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
