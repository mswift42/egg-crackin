import { EggCrackinPage } from './app.po';

describe('egg-crackin App', function() {
  let page: EggCrackinPage;

  beforeEach(() => {
    page = new EggCrackinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('egg-crackin works!');
  });
});
