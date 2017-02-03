//
// Criando um arquivo webpack para utilização
// do vue-loader como módulo bundler
//
// isso vai permitir que a minha aplicação seja dividida
// em módulos, facilitando a organização e desenvolvimento
//
// no final o webpack vai juntar tudo e gerar um único arquivo.
//
// para entender o resolve, veja a sessão `standalone vs runtime build`
// na documentação do vue, lá ele mostra o resolve
// https://vuejs.org/v2/guide/installation.html#Standalone-vs-Runtime-only-Build
//

let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: './resources/assets/js/app.js',

  output: {
    path: path.resolve(__dirname, 'public/js'),

    filename: 'app.js',

    publicPath: './public/'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};