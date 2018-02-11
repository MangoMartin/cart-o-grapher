var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var Shop = require('../db').shops;
=======
var Shops = require('../db').shops;
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636

router.get('/', function(req, res, next) {
	Shops.findAll()
			.then(shops => {
				res.json(shops)
				console.log(shops)
			})
		})

module.exports = router;