import { NgrxStoreDemoPage } from './app.po';

describe('ngrx-store-demo App', () => {
  let page: NgrxStoreDemoPage;

  beforeEach(() => {
    page = new NgrxStoreDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
