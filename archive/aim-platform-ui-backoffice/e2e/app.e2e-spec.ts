import { AimPlatformUiBackofficePage } from './app.po';

describe('aim-platform-ui-backoffice App', function() {
  let page: AimPlatformUiBackofficePage;

  beforeEach(() => {
    page = new AimPlatformUiBackofficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
