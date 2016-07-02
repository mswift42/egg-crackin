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

describe('saveSearch method ', () => {
  beforeEachProviders(() => [SearchHistoryService]);

  it('should add to searchhistory array',
  inject([SearchHistoryService], (service: SearchHistoryService) => {
    let q1 = "ham";
    let q2 = "butter";
    service.saveSearch(q1);
    service.saveSearch(q2);
    expect(service.searchhistory.length).toBe(2);
  }));
  it('should store in localStorage',
  inject([SearchHistoryService], (service: SearchHistoryService) => {
    let q1 = "ham";
    service.saveSearch(q1);
    expect(service.searchhistory[0]).toBe("ham");
    service.loadFromStorage();
    expect(service.searchhistory[0]).toBe("ham"); 
  }))


});
