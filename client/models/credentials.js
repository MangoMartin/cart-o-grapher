const Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://gfnpkmlqwnncdo:b3bcb12423c40f0deaaff707fee008f9c2029cc6c6bf7411d85e03f56c2621e7@ec2-23-23-243-111.compute-1.amazonaws.com:5432/df007q3thffl6t?ssl=true');

sequelize
  .authenticate()
  .then(()=>{
    console.log('connection success..');

  })
  .catch((err)=>{
    console.log('Unable due to', err);
  });

const Credentials = sequelize.define('credentials', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
});

module.exports = Credentials;
