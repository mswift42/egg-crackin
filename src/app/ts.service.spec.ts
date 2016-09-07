/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TsService } from './ts.service';

describe('Service: Ts', () => {
  beforeEach(() => {
    addProviders([TsService]);
  });

  it('should ...',
    inject([TsService],
      (service: TsService) => {
        expect(service).toBeTruthy();
      }));
});
