const mysql = require('mysql');
const bluebird = require('bluebird');

// heroku
// const db = mysql.createConnection({
//   host: 'us-cdbr-east-06.cleardb.net',
//   user: 'bbf6fd3aa26a15',
//   password: 'caa679b6',
//   database: 'heroku_4d85e7e8281f7b8'
// });
const pool  = mysql.createPool({
  host            : 'us-cdbr-east-06.cleardb.net',
  user            : 'bbf6fd3aa26a15',
  password        : 'caa679b6',
  database        : 'heroku_4d85e7e8281f7b8'
});
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

// process.on('uncaughtException',function(err){
//     if(err.code == "PROTOCOL_CONNECTION_LOST"){ 
//         mysql.restart();
//     }
// });

module.exports = pool;