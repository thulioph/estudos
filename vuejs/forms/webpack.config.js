//
// Criando um arquivo webpack para utilização de módulo bundler
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
// Os plugins são adicionados de acordo com o ambiente do NODE
//
// A configuração do objeto module é onde será setado os loaders
// `npm install babel-loader babel-core babel-preset-es2015 --save-dev`
// cria o arquivo `.babelrc` contendo as configurações do babel
//
// Sobre os plugins do webpack, consulte:
// https://webpack.js.org/plugins/commons-chunk-plugin/
//

let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    app: './resources/assets/js/app.js', // um bundle para o app
    vendor: ['vue', 'axios'] // outro bundle para os vendors
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),

    filename: '[name].js', // por utilizar vários bundlers, o name do output será "dinâmico"

    publicPath: './public/'
  },

  module: {
    rules: [
      {
        test: /\.js$/, // obtém todos os .js
        exclude: /node_modules/, // menos os da pasta node_modules
        loader: 'babel-loader' // utiliza o loader do babel
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: true,
      compress: {
        warnings: false
      }
    })
  );
}