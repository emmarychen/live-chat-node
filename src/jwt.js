const jwt = require('jsonwebtoken');
const secret  = 'jwtSecretkey';

// 生成 token
function generateToken(e) {
  let payload = { id: e, time: new Date() };
  let token   = jwt.sign(payload, secret, { expiresIn: 300 });

  return token;
}

// 解碼 token
function verifyToken(e, {okCallBack}) {
  let payload = jwt.verify(e, secret, (err, decoded) => {
    okCallBack(err, decoded)
  });

  return payload;
}

module.exports = { generateToken, verifyToken };