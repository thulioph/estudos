describe('GDS Demo', function() {
  it('title', function() {
    browser.get('/'); // passo a url relativa ao teste

    var title = element(by.className('title-primary'));

    expect(title.getText()).toEqual('Veja como está a saúde perto de você');
  });
});