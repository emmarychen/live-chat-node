const express = require("express");
const cors = require('cors');

const db = require(__dirname + '/db_connect');

const app = express();

const corsOptions ={
  origin:'http://localhost:8080',
  credentials:true, //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/login', require(__dirname + '/routes/login'));

app.listen(3000, () => { console.log('啟動server'); });