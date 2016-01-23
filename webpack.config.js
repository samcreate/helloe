const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');

var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, './app/App.js')
    ],
    output: {
    	path: path.resolve(__dirname, 'public'),
      filename: "bundle.js",
      publicPath: '/'
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map",
    module: {
        loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['react', 'es2015']
	      }
	    },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.styl$/, loader: stylusLoader}
	  ]
    },
    stylus: {
      use: [jeet(), nib(), rupture()]
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ],
    resolve: {
      extensions: ['', '.js', '.sass'],
      modulesDirectories: ['app', 'node_modules']
    }
};