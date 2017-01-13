var path = require('path')
var config = require('../config')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    example: './example/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'handlebars': 'handlebars/dist/cjs/handlebars.js',
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader?runtime=handlebars/runtime'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(gif|png|jpg)$/,
        loader: 'file-loader!url-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'jshint-loader',
        include: '/src/',
        exclude: /node_modules/
      }
    ]
  },
  jshint: {

  }
}
