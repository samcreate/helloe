var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

console.log(config.output.path);
new WebpackDevServer(webpack(config), {
  contentBase:config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});