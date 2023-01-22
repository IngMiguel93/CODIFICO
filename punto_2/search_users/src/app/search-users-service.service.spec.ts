import { TestBed } from '@angular/core/testing';

import { SearchUsersServiceService } from './search-users-service.service';

describe('SearchUsersServiceService', () => {
  let service: SearchUsersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUsersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
