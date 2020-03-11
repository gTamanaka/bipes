import { TestBed } from '@angular/core/testing';

import { CustomToolboxService } from './custom-toolbox.service';

describe('CustomToolboxService', () => {
  let service: CustomToolboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomToolboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
