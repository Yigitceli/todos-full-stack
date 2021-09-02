const pg = require("pg-promise")();
const dotenv = require("dotenv").config();

const db = pg(process.env.DB_CONNECTION)



module.exports = db;
