'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");


var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');

module.exports = {
  entry: [
    path.join(__dirname, 'app/App.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }, { 
      test: /\.styl$/, 
      loader: stylusLoader
    },
    { 
      test: /\.(jpg|png|svg|htc)$/,
      loader: 'file-loader?name=assets/images/[name].[ext]'
    },
    { 
      test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/, 
      loader: 'file-loader?name=assets/fonts/[name].[ext]'
    }]
  },
  stylus: {
    use: [jeet(), nib(), rupture()]
  },
  postcss: [
    require('autoprefixer')
  ]
};
