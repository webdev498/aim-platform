/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiteService } from './site.service';

describe('SiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteService]
    });
  });

  it('should ...', inject([SiteService], (service: SiteService) => {
    expect(service).toBeTruthy();
  }));
});
