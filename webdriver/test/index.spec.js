const assert = require('assert');

describe('Index Page', function() {
  beforeEach(function() {
    browser.url('http://localhost:8080');
  });

  it('should have the right title', function() {
    browser.waitForExist('#root');
    const title = browser.getTitle();
    assert.equal(title, 'Hello Cocktail Shake Up');
  });

  it('should say hello', function() {
    browser.waitForExist('#greet');
    const elem = browser.getText('#greet');
    assert.equal(elem, 'Hello World');
  });
});
