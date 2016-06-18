/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Http} from '@angular/http';
import { Recipe, RecipeService} from './recipe.service';

describe('Recipe Service', () => {
  beforeEachProviders(() => [ RecipeService, Http]);
  
 it('should inject Recipe Service',
 inject([RecipeService], (service: RecipeService, http: Http)=> {
   expect(service).toBeTruthy();
 })) 
});
