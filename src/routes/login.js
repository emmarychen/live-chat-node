const express = require('express');
const pool = require(__dirname + '/../db_connect');
const router = express.Router();

router.post('/', (req, res) => {
  const { account, password } = req.body;
  const output = {
    success: false,
    message: '帳號或密碼錯誤',
  };
  const sql = "SELECT * FROM member WHERE userID = ?";

  pool.getConnection({
    okCallBack(err, conn) {
      conn.query(sql, [account], (err, data) => {
        if(err) {
          return res.json("err");
        }
        if(data.length > 0) {
          output.success = true;
          delete output.message;
          return res.json(output);
        }
        else {
          res.status(400);
          return res.json(output);
        }
      });
      conn.release();
    }
  });
});

module.exports = router;