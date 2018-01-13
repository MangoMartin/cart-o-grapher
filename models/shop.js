'use strict';
module.exports = (sequelize, DataTypes) => {
  var shopinfo = sequelize.define('shop', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }, 
    shopName: DataTypes.STRING,
    shopImg: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    pickup: DataTypes.BOOLEAN,
    delivery: DataTypes.BOOLEAN,
    availability: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        shopinfo.belongsTo(models.shopinfo);
      }
    }
  });
  return shopinfo;
};