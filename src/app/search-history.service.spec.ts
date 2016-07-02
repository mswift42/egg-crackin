/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SearchHistoryService } from './search-history.service';

describe('SearchHistory Service', () => {
  beforeEachProviders(() => [SearchHistoryService]);

  it('should ...',
      inject([SearchHistoryService], (service: SearchHistoryService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Searchhistory getter ', () => {
  beforeEachProviders(() => [SearchHistoryService]);

  it('should return a string array',
  inject([SearchHistoryService], (service: SearchHistoryService) =>
  expect(service.searchhistory.length).toBe(0)));
});
