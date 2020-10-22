const translateCommands = {
  setSourceLanguage: function (lang) {
    return this.click('@slTlid')
      .clearValue('@slSearch')
      .setValue('@slSearch', lang)
      .pause(500)
      .click('@slSelect');
  },

  setTargetLanguage: function (lang) {
    return this.click('@tlTlid')
      .clearValue('@tlSearch')
      .setValue('@tlSearch', lang)
      .pause(500)
      .click('@tlSelect');
  },

  translate: function (keyword, confirmKey) {
    return this.clearValue('@slKeyword')
      .setValue('@slKeyword', keyword)
      .sendKeys('@slKeyword', confirmKey)
      .waitForElementVisible('@result');
  },
};

module.exports = {
  url: 'https://translate.google.co.in/',
  commands: [translateCommands],

  // A page object can have elements
  elements: {
    slTlid: {
      selector: '//*[@class="sl-more tlid-open-source-language-list"]',
      locateStrategy: 'xpath',
    },
    slSearch: {
      selector: 'input[id="sl_list-search-box"]',
    },
    slSelect: {
      selector:
        '//*[@class="language_list_item language_list_item_language_name"]/div',
      locateStrategy: 'xpath',
    },
    tlTlid: {
      selector: '//*[@class="tl-more tlid-open-target-language-list"]',
      locateStrategy: 'xpath',
    },
    tlSearch: {
      selector: 'input[id="tl_list-search-box"]',
    },
    tlSelect: {
      selector:
        "//div[@onclick=\"_e(event, 'changeLanguage+0', 'tl_list_ta_s')\"]",
      locateStrategy: 'xpath',
    },
    slKeyword: {
      selector: 'textarea[id="source"]',
    },
    result: {
      selector: '//*[@class="gt-cc-r"]',
      locateStrategy: 'xpath',
    },
  },
};
