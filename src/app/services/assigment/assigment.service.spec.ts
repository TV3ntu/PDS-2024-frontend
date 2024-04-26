import { TestBed } from '@angular/core/testing';

import { AssigmentService } from './assigment.service';

describe('AssigmentService', () => {
  let service: AssigmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
