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
    }));
});

describe('Query Url', () => {
  beforeEachProviders(() => [RecipeService, Http, ConnectionBackend,
  HTTP_PROVIDERS]);

  it('should return base url with an empty string as input',
  inject([RecipeService], (service: RecipeService) => {
    let url = service.queryUrl("");
    expect(url).toBe("http://food2fork.com/api/search?key=7987c43afcf8a03a964bbcb0c9152c84&q=");
  }));
  it('should append a single query parameter',
  inject([RecipeService], (service: RecipeService) => {
    let url = service.queryUrl("ham");
    expect(url).toBe("http://food2fork.com/api/search?key=7987c43afcf8a03a964bbcb0c9152c84&q=ham")
  }));
  it('should append multiple parametrs seperated by &',
  inject([RecipeService], (service: RecipeService) => {
    let url = service.queryUrl("ham butter");
    expect(url).toBe("http://food2fork.com/api/search?key=7987c43afcf8a03a964bbcb0c9152c84&q=ham&butter");
  }));
});
