const {client} = require("pg");
const dotenv = require("dotenv").config();

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect();

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
  
};




module.exports = db;
