const express = require("express");
const cors = require('cors');

const app = express();

// const corsOptions ={
//   origin:'http://localhost:8080',
//   credentials:true, //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/test', (req, res) => {
  res.send('hello test');
});

app.use('/api/login', require(__dirname + '/routes/login'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});