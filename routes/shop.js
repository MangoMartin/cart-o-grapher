var express = require('express');
var router = express.Router();
var multer = require('multer');
var pg = require('pg');
var fs = require('fs');
var User = require('../db').users;
var Shop = require('../db').shops;

var lgdUserId;
var lgdUsername;

router.post('/', function(req, res, next) {
	lgdUserId = req.cookies['userid'];
    lgdUsername = req.cookies['username'];

    Shop.findOne({
		where: { 
			'user_id' :  lgdUserId         
		}
		})    
			.then(function(shop) {
				if (shop) {
					Shop.update({
						user_id: lgdUserId,
						shop_name: req.body.shopname,
						owner: req.body.owner,
						about: req.body.about,
					    address: req.body.address,
						city: req.body.city,
						state: req.body.state,
						zip: req.body.zip,
						phone: req.body.phone,
						email: req.body.email,
						pickup: req.body.pickup,
						delivery: req.body.delivery
					}, {
					  	where: {
					    	user_id: lgdUserId
					  	}
					})      
				} else {
				    Shop.create({
						user_id: lgdUserId,
						shop_name: req.body.shopname,
						owner: req.body.owner,
						about: req.body.about,
					    address: req.body.address,
						city: req.body.city,
						state: req.body.state,
						zip: req.body.zip,
						phone: req.body.phone,
						email: req.body.email,
						pickup: req.body.pickup,
						delivery: req.body.delivery
					});
				}    
			});
		res.redirect('/api/owner');
});	


module.exports = router;