describe('Google translate', function () {
  after(function (browser, done) {
    browser.pause(5000);
    browser.end(() => {
      done();
    });
  });

  it('Set the translation as English-to-Tamil', function (browser) {
    const google = browser.page.google_translate();
    google
      .navigate()
      .waitForElementVisible('body')
      .assert.titleContains('Google Translate');

    google.setSourceLanguage('eng').setTargetLanguage('tam');
  });

  it('English to Tamil - First Word', function (browser) {
    const { REPORTS_PATH } = browser.globals;
    const google = browser.page.google_translate();
    google
      .translate('welcome', browser.Keys.ENTER)
      .pause(200)
      .saveScreenshot(`${REPORTS_PATH}/english-to-tamil-welcome.png`);
  });

  it('English to Tamil - Second Word', function (browser) {
    const { REPORTS_PATH } = browser.globals;
    const google = browser.page.google_translate();
    google
      .translate('mother', browser.Keys.ENTER)
      .pause(200)
      .saveScreenshot(`${REPORTS_PATH}/english-to-tamil-mother.png`);
  });
});
