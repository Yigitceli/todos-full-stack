const pg = require("pg-promise")();
const dotenv = require("dotenv").config();

const db = pg({
  connectionString: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.DB_CONNECTION,
  ssl:{
    rejectUnauthorized:false
  }  

});

module.exports = db;
