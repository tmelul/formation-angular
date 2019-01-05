import {TestBed} from '@angular/core/testing';

import {MockWebApiService} from './mock-web-api.service';

describe('MockWebApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockWebApiService = TestBed.get(MockWebApiService);
    expect(service).toBeTruthy();
  });
});
