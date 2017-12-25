const webpack = require('webpack')
const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    main: './app/js/main.js',
  },
  resolve: {
    extensions: ['.js'],
    alias: []
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name]-[chunkhash].js',
    chunkFilename: "static/js/[name]-[chunkhash].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: [path.resolve(__dirname, 'app')],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(__dirname, 'tmp')
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'}
          ],
          publicPath: '/'
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/imgs/[name]-[hash].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name]-[contenthash].css'
    }),
    new UglifyjsPlugin({
      sourceMap: true
    }),
    new OptimizeCssPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/static/js/vendor-mainfest.json') // 指向这个json
    })
  ]
}