const express = require('express');
const pool = require(__dirname + '/../db_connect');
const router = express.Router();

router.get('/', (req, res) => {
  const sql = "SELECT * FROM member";
  // db.query(sql, (error, results, fields) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     res.json(results);
  //   }
  // });

  pool.getConnection((err, conn) => {
    conn.query(sql, (err, rows) => {
      res.json(rows);
    })
    conn.release();
  })
});

module.exports = router;