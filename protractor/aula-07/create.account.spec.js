var helper = require('./helpers/helper');

describe('Create account', function() {
  beforeEach(function() {
    browser.get('cadastro/email');
  });

  it('title', function() {
    helper.checkTitle('Preparado para se tornar um Guardião da Saúde?');
  });

});