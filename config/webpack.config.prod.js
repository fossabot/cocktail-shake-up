'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const raw = Object.keys(process.env).reduce(
  (env, key) => {
    env[key] = process.env[key];
    return env;
  },
  {
    NODE_ENV:   process.env.NODE_ENV || 'development',
    PUBLIC_URL: '/',
  }
);
const stringified = {
  'process.env': Object.keys(raw).reduce((env, key) => {
    env[key] = JSON.stringify(raw[key]);
    return env;
  }, {}),
};

if (stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  bail:    true,
  devtool: 'source-map',
  entry:   [path.resolve(__dirname, '../src/index.js')],
  output:  {
    path:          path.resolve(__dirname, '../build'),
    filename:      'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath:    '/',
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
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      [
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
        }),
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings:  false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments:  false,
        screw_ie8: true,
      },
    }),
    new CaseSensitivePathsPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
    new HtmlWebpackPlugin({
      inject:   true,
      template: path.resolve(__dirname, '../public/index.html'),
      minify:   {
        removeComments:                true,
        collapseWhitespace:            true,
        removeRedundantAttributes:     true,
        useShortDoctype:               true,
        removeEmptyAttributes:         true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash:              true,
        minifyJS:                      true,
        minifyCSS:                     true,
        minifyURLs:                    true,
      },
    }),
    new InterpolateHtmlPlugin(raw),
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '../node_modules')),
    function() {
      this.plugin('done', function(stats) {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
          console.log(stats.compilation.errors);
          process.exit(1);
        }
        console.log();
        console.log();
        console.log('Done 🎉');
        console.log();
        process.exit(0);
      });
    },
  ],
  node: {
    fs:  'empty',
    net: 'empty',
    tls: 'empty',
  },
};
