const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
<<<<<<< HEAD
const cookiesMiddleware = require('universal-cookie-express');
=======
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
const cors = require('cors');


const router = express.Router();
const app = express();

require('./strategies/passport-local')(passport);
require('./strategies/passport-jwt')(passport);

app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());
<<<<<<< HEAD
app.use(cookiesMiddleware());
app.use(require('less-middleware')(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors({ origin: 'https://localhost:3232', credentials: true }))

=======
app.use(require('less-middleware')(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(cors({ origin: 'https://localhost:3232', credentials: true }))
// CORS errors?
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'cookies, accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

var loginSignupRoutes = require('./routes/login-signup')(passport);
var shopRoutes = require('./routes/shop');
var homeRoutes = require('./routes/home');

<<<<<<< HEAD
app.use('/', homeRoutes);
=======
app.use('/home', homeRoutes);
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
app.use('/api', loginSignupRoutes);

app.use('/api/owner', function(req, res, next) {
  passport.authenticate('jwt', {session: false}, function(err, user, jwtError) {
    if (user) {
      req.login(user, null, () => {})
      next()
    } else  {
      next(jwtError)
    }
  })(req, res, next)
});

app.use('/api/owner', shopRoutes);


app.get('*', (req, res, next) => {
	var err = new Error('Not Found');
 	err.status = 404;
  	next(err);
  	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use('/api/*', function(req, res, next) {
  var err = new Error('Not Found still');
  err.status = 404;
  next(err);
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

app.use(function(req, res, next) {
  var err = new Error('Not Found Okay');
  err.status = 404;
  next(err);
});

// if (app.get('env') === 'production') {
//   app.use(function(err, req, res, next) {
//     console.error('DEV ERROR')
//     res.status(err.status || 500);
//     res.json({
//       message: err.message,
//       error: err
//     });
//   });
// } else {
// 	app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     console.error('PROD ERROR')
//     res.json({
//       message: err.message,
//       error: {}
//     });
//   });
// }

const port = process.env.PORT || 3232;
app.listen(port);

module.exports = app;