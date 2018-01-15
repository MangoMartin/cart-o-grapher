require('babel-register');

let app = require('./server.babel');
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres@localhost:1234/cogdb');

module.exports = app;
