import { MzeAppPage } from './app.po';

describe('mze-app App', function() {
  let page: MzeAppPage;

  beforeEach(() => {
    page = new MzeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
