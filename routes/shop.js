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
    var days = req.body.Sunday + req.body.Monday + req.body.Tuesday + req.body.Wednesday + req.body.Thursday + req.body.Friday + req.body.Saturday;
    console.log(days);

    Shop.findOne({
		where: { 
			'user_id' :  lgdUserId         
		},   
			attributes: ['id']    
		})    
			.then(function(shop) {
				if (shop) {
					Shop.update({
						user_id: lgdUserId,
						shop_name: req.body.shop_name,
						owner: req.body.owner,
						about: req.body.about,
					    address: req.body.address,
						city: req.body.city,
						state: req.body.state,
						zip: req.body.zip,
						phone: req.body.phone,
						email: req.body.email,
						pickup: req.body.pickup,
						delivery: req.body.delivery,
						availability: days
					}, {
					  	where: {
					    	user_id: lgdUserId
					  	}
					})      
				} else {
				    Shop.create({
						user_id: lgdUserId,
						shop_name: req.body.shop_name,
						owner: req.body.owner,
						about: req.body.about,
					    address: req.body.address,
						city: req.body.city,
						state: req.body.state,
						zip: req.body.zip,
						phone: req.body.phone,
						email: req.body.email,
						pickup: req.body.pickup,
						delivery: req.body.delivery,
						availability: days
					});
				}    
			});
		res.redirect('/');
});	


module.exports = router;