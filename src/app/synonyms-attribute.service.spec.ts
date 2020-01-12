import { TestBed } from '@angular/core/testing';

import { SynonymsAttributeService } from './synonyms-attribute.service';

describe('SynonymsAttributeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynonymsAttributeService = TestBed.get(SynonymsAttributeService);
    expect(service).toBeTruthy();
  });
});
