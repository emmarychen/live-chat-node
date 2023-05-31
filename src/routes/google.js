const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const pool = require(__dirname + '/../db_connect');
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

    console.log(userInfo.data);
    const sql = "INSERT INTO third_member (userId, name) VALUES (?, ?)";
    pool.getConnection({
      okCallBack(err, conn) {
        conn.query(sql, [userInfo.data.email, userInfo.data.name], (err, data) => {
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
  } catch (error) {
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

    console.log(userInfo.data.email);
    res.json({ message: 'test' });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;