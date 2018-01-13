'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('users', {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        users.hasOne(models.shopinfo);
      }
    }
  });
  return user;
};