const CONFIGURATION = {
  "development": {
    "dialect": "postgres",
    "username": "postgres",
    "password": "Coyot3$mith!511",
    "host": "localhost",
    "port": 1234, //change to 5432 on your computer for testing, 1234 originally
    "database": "cogdb", // call the db instabase
    "jwtSecret": "MySuperDuperSecret",
    "jwtExpiration": 60*5, // 5 Minutes
    "saltRounds": 10
  },
  "production": 
  {
    "dialect": "postgres",
    "username": "ksbmplouchfshn",
    "password": "4fc7a244e823a255662fc98b21aaeba16d1b07f487976254ff437a301bf250e6",
    "host": "ec2-54-235-252-137.compute-1.amazonaws.com",
    "port": 5432,
    "database": "ddnaoa3vvhtr63"
    "jwtSecret": "MySuperDuperSecret",
    "jwtExpiration": 60*5, // 5 Minutes
    "saltRounds": 10
  }
}; 

const env = process.env.NODE_ENV || "development";

module.exports = CONFIGURATION[env]




