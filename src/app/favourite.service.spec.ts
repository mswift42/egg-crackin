/* tslint:disable:no-unused-variable */

import {
  async, inject, addProviders
} from '@angular/core/testing';
import { FavouriteService } from './favourite.service';

describe('Favourite Service', () => {
  beforeEach(() => {
    addProviders([FavouriteService]);
  });

  it('should ...',
    inject([FavouriteService], (service: FavouriteService) => {
      expect(service).toBeTruthy();
    }));
});
