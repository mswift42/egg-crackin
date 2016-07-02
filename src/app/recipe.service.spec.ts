/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Http, ConnectionBackend, HTTP_PROVIDERS} from '@angular/http';
import { Recipe, RecipeService} from './recipe.service';

describe('Recipe Service', () => {
  beforeEachProviders(() => [RecipeService, Http,
    ConnectionBackend, HTTP_PROVIDERS]);

  it('should inject Recipe Service',
    inject([RecipeService], (service: RecipeService, http: Http) => {
      expect(service).toBeTruthy();
    }));
    it('should return correct api key',
    inject([RecipeService], (service: RecipeService) => {
      let key = service.food2forkKey;
      expect(key).toBe("7987c43afcf8a03a964bbcb0c9152c84");
    }))
});
