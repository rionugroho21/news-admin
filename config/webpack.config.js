const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const ROOT_DIR = path.resolve(__dirname, '../')
const APP_DIR = path.resolve(__dirname, ROOT_DIR + '/src');
const BUILD_DIR = path.resolve(__dirname, ROOT_DIR + '/public');

module.exports = env => {
  const { PLATFORM } = env;
  return merge([
    {
      entry: ['@babel/polyfill', APP_DIR + '/App.js'],
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, BUILD_DIR),
        publicPath: '../'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
          },
          {
            test: /\.(scss|css)$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg|jpg|jpeg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
          },
          {
            test: /\.html$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ],
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      devServer: {
        contentBase: path.resolve(__dirname, BUILD_DIR),
        historyApiFallback: true
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        })
      ]
    }
  ])
};
