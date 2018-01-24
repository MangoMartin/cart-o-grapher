var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

var config = require(path.join(__dirname, 'config', 'config.js'));

console.log('Create sequelize...');
var sequelize = new Sequelize('postgres://ksbmplouchfshn:4fc7a244e823a255662fc98b21aaeba16d1b07f487976254ff437a301bf250e6@ec2-54-235-252-137.compute-1.amazonaws.com:5432/ddnaoa3vvhtr63');

var db = {};

fs.readdirSync(path.join(__dirname, 'models'))
.filter(function(file) {
	return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function(file) {
	var model = sequelize.import(path.join(__dirname, 'models', file));
	db[model.name] = model;
});

var users = sequelize.define('users', {
  username: Sequelize.TEXT,
  password: Sequelize.TEXT
});

var shops = sequelize.define('shops', {
  user_id: Sequelize.INTEGER,
  shop_name: Sequelize.STRING,
  owner: Sequelize.STRING,
  about: Sequelize.STRING,
  shop_img: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.INTEGER,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  pickup: Sequelize.BOOLEAN,
  delivery: Sequelize.BOOLEAN,
  availability: Sequelize.STRING
});

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db),
    dbusers.hasOne(db.shops, {as: 'shops'}),
    dbshops.belongsTo(db.users, {as: 'users'});
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;