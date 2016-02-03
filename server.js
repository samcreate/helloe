/* eslint no-console: 0 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import bodyParser from 'body-parser'
import multer from 'multer' 
import request from 'request'
import fs from 'fs'

console.log('process.env.NODE_ENV: ',process.env.NODE_ENV);

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const upload = multer({ dest: 'uploads/' });

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });


  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


// SOF PROXY FORM UPLOAD TO GREENHOUSE.IO
const cpUpload = upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'cover_letter', maxCount: 1 }])
app.post('/service/submit-job', cpUpload, function (req, res, next) {
  
  const formData = {...req.body};
  formData.resume = fs.createReadStream(req.files.resume[0].path)
  formData.cover_letter = fs.createReadStream(req.files.cover_letter[0].path)


  request.post({url:'https://9b7457b5a16e6f69f5a688bd97030091:@api.greenhouse.io/v1/applications/', formData: formData}, function optionalCallback(err, httpResponse, body) {
    if (err) {
      res.json(err);
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
    res.json(body);
  });
  
  
});

// EOF PROXY FORM UPLOAD TO GREENHOUSE.IO

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});



// for parsing multipart/form-data