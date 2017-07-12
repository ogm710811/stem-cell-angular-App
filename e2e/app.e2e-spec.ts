import { StemCellAngularAppPage } from './app.po';

describe('stem-cell-angular-app App', () => {
  let page: StemCellAngularAppPage;

  beforeEach(() => {
    page = new StemCellAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
