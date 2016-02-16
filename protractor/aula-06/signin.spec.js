var helper = require('./helpers/helper');

describe('Sign-in', function() {
  beforeEach(function() {
    browser.get('login/email');
  });

  it('title', function() {
    helper.checkTitle('Preparado para se tornar um Guardião da Saúde?');
  });

  it('try to login with a invalid user and pass', function() {
    var email = element(by.model('loginEmail.email'));
    var password = element(by.model('loginEmail.password'));
    var btn = element(by.css('.btn-signup'));

    email.sendKeys('manochao@gmail.com');
    password.sendKeys('dsdsds');
    btn.click();

    var span = element(by.css('.alert-danger span'));

    expect(span.getText()).toEqual('Email ou usuário inválidos.');
  });

});