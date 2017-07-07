
const webpack = require('webpack');

module.exports = {
  entry: "./app/boot.ts",
  output: {
    path: __dirname + '/build',
    filename: 'app.min.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  module: {
    rules: [
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.ts/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}