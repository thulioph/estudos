describe('GDS Demo', function() {
  it('title', function() {
    browser.driver.get('http://dev.guardioesdasaude.org/');

    var title = element(by.className('title-primary'));

    expect(title.getText()).toEqual('Veja como está a saúde perto de você');
  });
});