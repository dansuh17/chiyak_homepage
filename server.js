'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

// open up express server
const app = express();

app.set('port', (process.env.PORT || 3001));

// body parser takes the entire text of request stream and
// parses them into a certain way so that we could use in form as
// req.body form
// parse application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// mongodb database configuration
mongoose.connect('mongodb://localhost:27017/chiyak');
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('connected to mongodb server'));

app.put('/api/news/post', (req, res) => {
  console.log(req.body);
});

// file upload
const upload = multer({ dest: './client/src/img/' });
// the 'myfile' should be specified as key of form data
app.post('/api/upload/', upload.single('myfile'), (req, res, next) => {
  console.log(req.body);  // form fields other than file
  console.log(req.file);  // file of key 'myfile'
  res.status(204).end();
});

// start listening at designated port
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
