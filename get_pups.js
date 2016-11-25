const dbConn = require('./db_connection');

module.exports = cb =>
  dbConn.query('SELECT * FROM pups;', (error, data) =>
    (error
      ? cb(error)
      : cb(null, data.rows)));
