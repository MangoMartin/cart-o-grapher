var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

var config = require(path.join(__dirname, 'config', 'config.js'));

console.log('Create sequelize...');
var sequelize = new Sequelize(config.database, config.username, config.password, config);

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
  user_id: Sequelize.INTEGER,
  username: Sequelize.TEXT,
  password: Sequelize.TEXT
});

var shops = sequelize.define('shops', {
  user_id: Sequelize.INTEGER,
  shop_name: Sequelize.STRING,
  shop_img: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.INTEGER,
  phone: Sequelize.INTEGER,
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