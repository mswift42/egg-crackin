import { EggCrackin!Page } from './app.po';

describe('egg-crackin! App', function() {
  let page: EggCrackin!Page;

  beforeEach(() => {
    page = new EggCrackin!Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
