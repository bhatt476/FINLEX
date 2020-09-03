import { TestBed } from '@angular/core/testing';

import { MainTable3Service } from './main-table3.service';

describe('MainTable3Service', () => {
  let service: MainTable3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTable3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
