/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('Component: Title', () => {
  it('should create an instance', () => {
    let component = new TitleComponent();
    expect(component).toBeTruthy();
    component.title = "test1";
    expect(component.title).toBe('test1');
  });
});