var helper = require('./helpers/helper');

describe('Home', function() {
  // antes de cada teste, ele entra no beforeEach
  beforeEach(function() {
    browser.get('/'); // passo a url relativa ao teste
  });

  it('title', function() {
    helper.checkTitle('Veja como está a saúde perto de você');
  });

  it('h4', function() {
    var h4Elements = element.all(by.css('.step-title')); // pego todos os elementos
    expect(h4Elements.getText()).toEqual(['Registrar', 'Como Participar', 'Mapa da Saúde', 'Dicas', 'Diário da Saúde', 'Notícias']); // toEqual() aceita um array de valores que serão os possíveis textos de cada h4
  });

  it('menu items', function() {
    var nav = element(by.css('.nav-secondary')); // pegando o elemento principal que contém os ítens do menu | retorna só 1 elemento
    var navItem = nav.all(by.css('a')); // pego cada a dentro da nav | retorna um array de elementos
    expect(navItem.getText()).toEqual(['Início', 'O Guardiões da Saúde', 'Política de Privacidade', 'Notícias', 'Fale Conosco']); // verifico o texto de cada a
  });

  // outra maneira de escrever o teste acima
  it('menu items 2', function() { 
    var navItem = element.all(by.css('.nav-secondary a')); 
    expect(navItem.getText()).toEqual(['Início', 'O Guardiões da Saúde', 'Política de Privacidade', 'Notícias', 'Fale Conosco']);
  });

});