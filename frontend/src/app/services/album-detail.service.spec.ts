import { TestBed, inject } from '@angular/core/testing';

import { AlbumDetailService } from './album-detail.service';

describe('AlbumDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumDetailService]
    });
  });

  it('should be created', inject([AlbumDetailService], (service: AlbumDetailService) => {
    expect(service).toBeTruthy();
  }));
});
