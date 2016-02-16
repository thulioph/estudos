exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  baseUrl: 'http://dev.guardioesdasaude.org/'
  // ,capabilities: {
  //   browserName: 'chrome'
  // }
  // ,multiCapabilities: [
  //   { browserName: 'chrome' },
  //   { browserName: 'firefox' }
  // ]
  // ,framework: 'jasmmine2'
}

// Alterando a porta padrão (4444) do selenium
// webdriver-manager start --seleniumPort 4443 

// capabilities só roda 1 instância
// multiCapabilities roda diversas instâncias