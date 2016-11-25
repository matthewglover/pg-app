const env = require('env2');
const fs = require('fs');

env('./local.env');

const dbConn = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/build_database.sql`).toString();

dbConn
.query(sql, (error, result) =>
  (error
    ? console.log('Error', error)
    : console.log('Result', result)));
