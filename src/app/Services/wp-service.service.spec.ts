import { TestBed } from '@angular/core/testing';

import { WPServiceService } from './wp-service.service';

describe('WPServiceService', () => {
  let service: WPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
