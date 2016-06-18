/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';

describe('Component: Recipe', () => {
  it('should create an instance', () => {
    let component = new RecipeComponent();
    expect(component).toBeTruthy();
  });
});
