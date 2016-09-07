import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EggCrackinAppComponent } from '../app/egg-crackin.component';

beforeEachProviders(() => [EggCrackinAppComponent]);

describe('App: EggCrackin', () => {
  it('should create the app',
      inject([EggCrackinAppComponent], (app: EggCrackinAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'egg-crackin works!\'',
      inject([EggCrackinAppComponent], (app: EggCrackinAppComponent) => {
    expect(app.title).toEqual('egg-crackin works!');
  }));
});
