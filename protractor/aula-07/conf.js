var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'results',
  filename: 'results-gds.html',
  showSummary: true,
  showQuickLinks: true,
  showConfiguration: true
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'signin.spec.js'],
  baseUrl: 'http://dev.guardioesdasaude.org/',
  // ,capabilities: {
  //   browserName: 'chrome'
  // }
  // ,multiCapabilities: [
  //   { browserName: 'chrome' },
  //   { browserName: 'firefox' }
  // ]
  // framework: 'jasmine2',
  
  // Função para o jasmine-spec-reporter
  // onPrepare: function() {
  // var SpecReporter = require('jasmine-spec-reporter');
  //   jasmine.getEnv().addReporter(new SpecReporter({
  //     displayFailureSummary: true,
  //     displayFailedSpec: true,
  //     displaySuiteNumber: true
  //   }));
  // }

  // Função para o protractor-html-screenshot-reporter
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  }
}

// Alterando a porta padrão (4444) do selenium
// webdriver-manager start --seleniumPort 4443 

// capabilities só roda 1 instância
// multiCapabilities roda diversas instâncias