const mysql = require('mysql');
const bluebird = require('bluebird');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'live_chat',
  port: 3306
});

db.on('error', ex => {
  console.log(ex);
});

db.connect();

bluebird.promisifyAll(db);

module.exports = db;