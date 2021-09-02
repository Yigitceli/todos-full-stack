const pg = require("pg-promise")();
pg.pg.defaults.ssl = true;
const dotenv = require("dotenv").config();

const db = pg(process.env.DATABASE_URL);
pg.pg.defaults.ssl = true;

module.exports = db;
