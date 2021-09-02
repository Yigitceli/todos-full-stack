const pg = require("pg-promise")();
const dotenv = require("dotenv").config();





const config = {
  connectionString: process.env.DATABASE_URL + "?ssl=true",
  max: 30,
  ssl: {
    rejectUnauthorized: false,
  }
};

const db = pg(config);


module.exports = db;
