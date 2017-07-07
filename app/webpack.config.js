
const webpack = require('webpack');

module.exports = {
    entry: "./app/boot.ts",
    output: {
        path: __dirname +  '/build',
        filename: 'app.min.js'
    },
    resolve: {
        extensions: ['.ts', '.js'] 
    },
    module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}