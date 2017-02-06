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