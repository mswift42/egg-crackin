/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FavouriteService } from './favourite.service';

describe('Favourite Service', () => {
  beforeEachProviders(() => [FavouriteService]);

  it('should ...',
      inject([FavouriteService], (service: FavouriteService) => {
    expect(service).toBeTruthy();
  }));
});
