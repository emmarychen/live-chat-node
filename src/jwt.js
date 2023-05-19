const jwt = require('jsonwebtoken');
const secret  = 'jwtSecretkey';

// 生成 token
const generateToken = (e) => {
  let payload = { id: e, time: new Date() };
  let token   = jwt.sign(payload, secret, { expiresIn: 300 });

  return token;
}

// 解碼 token
const verifyToken = (req, res, next) => {
  // 从请求的头部、查询参数或请求体中获取令牌
  // const token = req.headers.authorization || req.query.token || req.body.token;
  const token = (req.headers.authorization || '').slice(7);
  
  if (!token) {
    return res.status(401).json({ message: '未提供令牌' });
  }

  try {
    // 验证并解码令牌
    const decoded = jwt.verify(token, secret);

    // 在 req 对象中保存解码后的用户信息
    req.user = decoded;

    // 继续下一个中间件或路由处理程序
    next();
  } catch (err) {
    return res.status(401).json({ message: '令牌無效' });
  }
};

module.exports = { generateToken, verifyToken };