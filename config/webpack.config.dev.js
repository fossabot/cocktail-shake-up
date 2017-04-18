'use strict';

const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const raw = Object.keys(process.env).reduce((env, key) => {
  env[key] = process.env[key];
  return env;
}, { NODE_ENV: process.env.NODE_ENV || 'development', });
const stringified = {
  'process.env': Object.keys(raw).reduce((env, key) => {
    env[key] = JSON.stringify(raw[key]);
    return env;
  }, {}),
};

module.exports = {
  devServer: {
    inline: true,
    host:   '0.0.0.0',
    hot:    true,
    port:   3000,
  },
  devtool: 'cheap-eval-source-map',
  entry:   [require.resolve('react-dev-utils/webpackHotDevClient'), path.resolve(__dirname, '../src/index.js')],
  output:  {
    path:       path.resolve(__dirname, '../build'),
    pathinfo:   true,
    filename:   'static/js/bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules:    [path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.json'],
  },
  module: {
    loaders: [
      {
        exclude: [/\.html$/, /\.js$/, /\.css$/, /\.json$/, /\.svg$/],
        loader:  'url-loader',
        query:   {
          limit: 10000,
          name:  'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        enforce: 'pre',
        include: path.resolve(__dirname, '../src'),
        test:    /\.js$/,
        loader:  'eslint-loader',
      },
      {
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        test:    /\.js$/,
        loader:  'babel-loader',
        query:   {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use:  [
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader:  'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              },
            },
          },
        ],
      },
      {
        test:   /\.json$/,
        loader: 'json-loader',
      },
      {
        test:   /\.svg$/,
        loader: 'file-loader',
        query:  {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      inject:   true,
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new InterpolateHtmlPlugin(raw),
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '../node_modules')),
  ],
  node: {
    fs:  'empty',
    net: 'empty',
    tls: 'empty',
  },
};
