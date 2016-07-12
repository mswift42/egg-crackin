/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DeleteBookmarkComponent } from './delete-bookmark.component';

describe('Component: DeleteBookmark', () => {
  it('should create an instance', () => {
    let component = new DeleteBookmarkComponent();
    expect(component).toBeTruthy();
  });
});
