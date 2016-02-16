var helper = require('./helpers/helper');

describe('Home', function() {
  // antes de cada teste, ele entra no beforeEach
  beforeEach(function() {
    browser.get('/'); // passo a url relativa ao teste
  });

  it('title', function() {
    helper.checkTitle('Veja como está a saúde perto de você');
  });

});