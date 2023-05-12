const mysql = require('mysql');
const bluebird = require('bluebird');

// heroku
const pool  = mysql.createPool({
  host            : 'us-cdbr-east-06.cleardb.net',
  user            : 'bbf6fd3aa26a15',
  password        : 'caa679b6',
  database        : 'heroku_4d85e7e8281f7b8'
});

// local
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'test',
//   password: 'test',
//   database: 'live_chat',
//   port: 8889
// });

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'test',
//   password: 'test',
//   database: 'live_chat',
//   port: 8889
// });

// db.on('error', ex => {
//   console.log(ex);
// });

// db.connect();

// bluebird.promisifyAll(db);

function getConnection({okCallBack}) {
  pool.getConnection((err, connection) => {
    okCallBack(err, connection);
  });
};

module.exports = {
  getConnection
}