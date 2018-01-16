const express = require('express');
const router = express.Router();
const cookee = require('react-cookie');
const cuukii = cookee.reactCookie();


const models  = require('../db');

module.exports = function(passport) {
	router.post('/signup', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) {
			  	return next(err); 
			}
			if (!user) {
			   	return next({ error : true, message : info });
			}
			req.login(user, function(loginErr) {
			   	if (loginErr) {
			     	return next(loginErr);
			   	}
			 	return res.redirect('/api');
			}); 
		})(req, res, next);
	});

	router.post('/', function(req, res, next) {
		passport.authenticate('local-login', function(err, user, info) {
			if (err) {
			  	return next(err); 
			}
			if (! user) {
			   	return next({ error : true, message : info });
			}
			req.login(user, function(loginErr) {
			    if (loginErr) {
					return next(loginErr);
			    } 

  
  
				let jwtCookie = res.cookie("jwt", user.token);
				let userCookie = res.cookie("username", user.username);
				let pwCookie = res.cookie("userid", user.id);
				cuukii.setRawCookie(jwtCookie, userCookie, pwCookie);
 				cookee.plugToRequest(req, res);
 				return res.redirect('/api/owner');
				
			}); 
		})(req, res, next);
	});
 

  	return router;
};

