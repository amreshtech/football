import { FootballPage } from './app.po';

describe('football App', () => {
  let page: FootballPage;

  beforeEach(() => {
    page = new FootballPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
