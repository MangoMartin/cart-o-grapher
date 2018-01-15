require('babel-register');

let app = require('./server.babel');
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://ksbmplouchfshn:4fc7a244e823a255662fc98b21aaeba16d1b07f487976254ff437a301bf250e6@ec2-54-235-252-137.compute-1.amazonaws.com:5432/ddnaoa3vvhtr63');

module.exports = app;
