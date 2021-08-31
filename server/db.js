const pg =      require('pg-promise')();

const db = pg(process.env.DB_CONNECTION);


module.exports = db;
