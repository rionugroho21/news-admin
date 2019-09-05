/* eslint-disable */
const merge = require('webpack-merge');

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Configs
const baseConfig = require('./webpack.config');

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        minimizer: [new UglifyJsPlugin()],
      }
    },
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
}
