const mysql  = require('mysql2');
const config = require('./config');

let sqlUser = {
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.database,
}
if (process.env.NODE_ENV == 'development') {
  sqlUser.port = config.port;
} else {
  sqlUser.port = null;
}

const pool = mysql.createPool(sqlUser);

function connect(sql, userData, { okCallBack }) {
  pool.getConnection((err, connection) => {
    if (err) return okCallBack(err, null);

    connection.query(sql, userData, (err, data) => {
      okCallBack(err, data);
      connection.release();
    });
  });
};

module.exports = {
  connect
}