const CONFIGURATION = {
  "development": {
    "dialect": "postgres",
    "username": "postgres",
    "password": "",
    "host": "localhost",
    "port": 1234, //change to 5432 on your computer for testing, 1234 originally
    "database": "instabase", // call the db instabase
    "jwtSecret": "MySuperDuperSecret",
    "jwtExpiration": 60*5, // 5 Minutes
    "saltRounds": 10
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}; 

const env = process.env.NODE_ENV || "development";

module.exports = CONFIGURATION[env]




