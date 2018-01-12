const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const models  = require('./db');

const router = express.Router();
const app = express();

require('./strategies/passport-local')(passport);
require('./strategies/passport-jwt')(passport);

app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, 'client/build')));

let loginSignupRoutes = require('./routes/loginSignup')(passport);

app.use('/api/', loginSignupRoutes);

app.use('/api/owner/', function(req, res, next) {
  passport.authenticate('jwt', {session: false}, function(err, user, jwtError) {
    if (user) {
      req.login(user, null, () => {})
      next()
    } else  {
      next(jwtError)
    }
  })(req, res, next)
});

// app.get('/api', (req, res) => {
  
// 	res.json([
// {
//   	"id": 1,
//   	"username": "samsepi0l"
//   }, {
//   	"id": 2,
//   	"username": "D0loresH4ze"
//   }]);
// });


app.get('*', (req, res, next) => {
	var err = new Error('Not Found');
 	err.status = 404;
  	next(err);
  	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// app.use('/api/*', function(req, res, next) {
//   var err = new Error('Not Found still');
//   err.status = 404;
//   next(err);
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });

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