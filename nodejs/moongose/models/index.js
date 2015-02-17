var MODELS_FOLDER = './models';
require('fs')
.readdirSync(MODELS_FOLDER)
.forEach(function(file) {
  if (file === 'index.js') {
    require('./'+file);
    console.log('Add model: ', file)
  }
})