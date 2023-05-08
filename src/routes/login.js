const express = require('express');
const db = require(__dirname + '/../db_connect');
const router = express.Router();

router.get('/', (req, res) => {
  const sql = "SELECT * FROM member";
  db.query(sql, (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;