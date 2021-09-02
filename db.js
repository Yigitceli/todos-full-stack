const pg = require("pg-promise")();
const dotenv = require("dotenv").config();

const db = pg(process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.DB_CONNECTION);

module.exports = db;
