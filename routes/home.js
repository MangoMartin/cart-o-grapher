var express = require('express');
var router = express.Router();
var Shop = require('../db').shops;

router.get('/', function(req, res, next) {
	Shops.findAll()
			.then(shops => {
				res.json(shops)
				console.log(shops)
			})
		})

module.exports = router;