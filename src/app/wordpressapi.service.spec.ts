import { TestBed } from '@angular/core/testing';

import { WordpressapiService } from './wordpressapi.service';

describe('WordpressapiService', () => {
  let service: WordpressapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordpressapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
