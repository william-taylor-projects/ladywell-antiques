
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const webpack = require('webpack');
const path = require('path');
 
module.exports = options => {
  const opt = options || {};
  const config = {
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
        { test: /\.css$/, loader: 'raw-loader' },
        { test: /\.html$/, loader: 'raw-loader' }
      ]
    }
  }

  if (opt.MODE === 'prod') {
    config.entry = "./app/boot-prod.ts";
    config.module.rules.push({ test: /\.ts$/, loaders: ['@ngtools/webpack'] });
    config.plugins = [
      new AotPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: __dirname + '/app/modules/app.module#AppModule'
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          warnings: false,
          screw_ie8: true
        },
        comments: false
      }),
    ];
  } else {
    let rule = { 
      test: /\.ts$/, 
      loaders: [
        'awesome-typescript-loader', 
        'angular2-template-loader'
      ] 
    };
    
    config.module.rules.push(rule);
  }

  return config;
}