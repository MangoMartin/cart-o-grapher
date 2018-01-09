const Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:nppsjuoll@localhost:5432/location');

sequelize
  .authenticate()
  .then(()=>{
    console.log('connection success..');

  })
  .catch((err)=>{
    console.log('Unable due to', err);
  });

const Location = sequelize.define('locations', {
  address: {
    type: Sequelize.STRING
  }
});

module.exports = Location;
