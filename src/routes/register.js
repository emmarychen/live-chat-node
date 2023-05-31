const express = require('express');
const pool = require(__dirname + '/../db_connect');
const router = express.Router();

router.post('/', (req, res) => {
  const { account, password } = req.body;
  const sql = "INSERT INTO member (userId, pwd) VALUES (?, PASSWORD(?))";
  pool.getConnection({
    okCallBack(err, conn) {
      conn.query(sql, [account, password], (err, data) => {
        if(err) {
          if(err.code == 'ER_DUP_ENTRY') {
            res.status(409).json({ message: '帳號已存在' });
          } else {
            res.status(500).send('伺服器錯誤');
          }
          return;
        }
        res.status(201).json({ success: true });
      });
      conn.release();
    }
  });
});

module.exports = router;