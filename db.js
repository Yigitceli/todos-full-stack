const pg = require("pg-promise")();
const dotenv = require("dotenv").config();

let ssl = null;

if (process.env.NODE_ENV === 'development') {
  ssl = {rejectUnauthorized: false};
}

const config = {
  connectionString: process.env.DATABASE_URL,
  max: 30,
  ssl:ssl
};

const db = pg(config);


module.exports = db;
