const assert = require('assert');

describe('Goodbye Page', function() {
  beforeEach(function() {
    browser.url('http://localhost:8080/goodbye');
  });

  it('should have the right title', function() {
    browser.waitForExist('#root');
    const title = browser.getTitle();
    assert.equal(title, 'Goodbye Cocktail Shake Up');
  });

  it('should say goodbye', function() {
    browser.waitForExist('#goodbye', 500);
    const elem = browser.getText('#goodbye');
    assert.equal(elem, 'Goodbye World');
  });
});
