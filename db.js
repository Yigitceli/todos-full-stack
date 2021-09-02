const pg = require("pg-promise")();
const dotenv = require("dotenv").config();


const config = {
  connectionString: process.env.DATABASE_URL,
  max: 30,  
};

const db = pg(config);


module.exports = db;

//"heroku-postbuild": "cd client && npm install && npm run build"