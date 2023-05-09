const express = require("express");
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// const corsOptions ={
//   // origin:'https://live-chat-node.herokuapp.com',
//   origin:'http://localhost:8080',
//   credentials:true,
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// app.use(cors());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.use('/api/login', require(__dirname + '/routes/login'));

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});