var helper = require('./helpers/helper');

describe('Sign-in', function() {
  beforeEach(function() {
    browser.get('login/email');
  });

  it('title', function() {
    helper.checkTitle('Preparado para se tornar um Guardião da Saúde?');
  });

});