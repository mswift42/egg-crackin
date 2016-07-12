/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BookmarkedComponent } from './bookmarked.component';

describe('Component: Bookmarked', () => {
  it('should create an instance', () => {
    let component = new BookmarkedComponent();
    expect(component).toBeTruthy();
  });
});
