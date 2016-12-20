var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: '.',
    filename: '[name].js',
    publicPath: '/dist',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
 };