const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const router = express.Router();
const app = express();

require('./strategies/passport-local')(passport);
require('./strategies/passport-jwt')(passport);

app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
