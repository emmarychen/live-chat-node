const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const pool = require(__dirname + '/../db_connect');
const jwt = require(__dirname + '/../jwt.js');
const router = express.Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

router.post('/register', async(req, res) => {
  try {
    const { access_token } = req.body;
    client.setCredentials({ access_token });
    const userInfo = await client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    });
    const { email, name } = userInfo.data;

    const sql = "INSERT INTO third_member (userId, name) VALUES (?, ?)";
    pool.connect(sql, [email, name], {
      okCallBack(err, data) {
        if(err) {
          if(err.code == 'ER_DUP_ENTRY') {
            res.status(409).json({ message: '帳號已存在' });
          } else {
            res.status(500).send('伺服器錯誤');
          }
          return;
        }
        res.status(201).json({ success: true });
      }
    });
  } catch(error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

router.post('/login', async(req, res) => {
  try {
    const { access_token } = req.body;
    client.setCredentials({ access_token });
    const userInfo = await client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    });
    const { email } = userInfo.data;

    const output = {
      success: false,
      message: '',
      token: '',
    };
    const sql = "SELECT * FROM third_member WHERE userId = ?";
    pool.connect(sql, email, {
      okCallBack(err, data) {
        if(err) {
          res.status(500).send('伺服器錯誤');
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
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;