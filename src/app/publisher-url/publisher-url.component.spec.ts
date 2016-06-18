/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PublisherUrlComponent } from './publisher-url.component';

describe('Component: PublisherUrl', () => {
  it('should create an instance', () => {
    let component = new PublisherUrlComponent();
    expect(component).toBeTruthy();
  });
});
