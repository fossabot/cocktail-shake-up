const assert = require('assert');

describe('webdriver.io page', function() {
  it('should have the right title - the fancy generator way', function() {
    browser.url('http://webdriver.io');
    const title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
});
