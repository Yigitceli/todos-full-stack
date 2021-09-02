const pg = require("pg-promise")();
pgp.pg.defaults.ssl = true;
const dotenv = require("dotenv").config();

const db = pg(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

module.exports = db;
