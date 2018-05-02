import { RouterAppPage } from './app.po';

describe('router-app App', () => {
  let page: RouterAppPage;

  beforeEach(() => {
    page = new RouterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
