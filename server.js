'use strict';

const express = require('express');
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

// start listening at designated port
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

