const mysql = require('mysql');

// heroku
const pool  = mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'bbf6fd3aa26a15',
  password: 'caa679b6',
  database: 'heroku_4d85e7e8281f7b8'
});

// local
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'test',
//   password: 'test',
//   database: 'live_chat',
//   port: 8889
// });

function connect(sql, userData, {okCallBack}) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(sql, userData, (err, data) => {
      okCallBack(err, data);
    });
    connection.release();
  });
};

module.exports = {
  connect
}