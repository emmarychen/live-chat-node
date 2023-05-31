const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    'https://live-chat-node.herokuapp.com',
    'http://localhost:8080',
  ],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ub方案
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", req.headers.host);
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// }); 

app.use('/api/register', require(__dirname + '/routes/register'));
app.use('/api/login', require(__dirname + '/routes/login'));
app.use('/api/google', require(__dirname + '/routes/google'));

app.use(express.static(path.resolve(__dirname, './dist')));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});