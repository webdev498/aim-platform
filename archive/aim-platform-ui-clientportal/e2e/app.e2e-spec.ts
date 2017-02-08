import { AimPlatformUiClientportalPage } from './app.po';

describe('aim-platform-ui-clientportal App', function() {
  let page: AimPlatformUiClientportalPage;

  beforeEach(() => {
    page = new AimPlatformUiClientportalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
