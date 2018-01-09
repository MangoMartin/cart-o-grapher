import {Link, Route, Switch} from 'react-router-dom';

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

require('./strategies/passport-local')(passport);
require('./strategies/passport-jwt')(passport);

app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, '/build')));

const port = process.env.PORT || 3000;