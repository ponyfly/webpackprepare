const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'app'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(__dirname, 'tmp')
          }
        }
      }
    ]
  }
}