const express = require('express');
const pool = require(__dirname + '/../db_connect');
const jwt = require(__dirname + '/../jwt.js');
const router = express.Router();

router.post('/', (req, res) => {
  const { account, password } = req.body;
  const output = {
    success: false,
    message: '',
    token  : ''
  };
  const sql = "SELECT * FROM member WHERE userId = ? AND pwd = ?";
  pool.connect(sql, [account, password], {
    okCallBack(err, data) {
      if(err) {
        return res.status(500).send('伺服器錯誤');
      }
      if(data.length > 0) {
        const id    = data[0].userId;
        const token = jwt.generateToken(id);

        output.success = true;
        output.message = '成功登入';
        output.token   = token;
        return res.json(output);
      }
      else {
        return res.status(400).send('帳號或密碼錯誤');
      }
    }
  });
});

router.get('/checkauth', jwt.verifyToken, (req, res) => {
  // const token = (req.headers.authorization || '').slice(7);
  // jwt.verifyToken(token, {
  //   okCallBack(err, decoded) {
  //     if(err) {
  //       return res.status(401).send("請重新登入");
  //     } else {
  //       const { id } = decoded;
  //       console.log(id);
  //       return res.send("驗證成功");
  //     }
  //   }
  // });
  console.log(req.user);
  res.json({ message: '成功訪問受保護的路由', userId: req.user.id });
});

module.exports = router;