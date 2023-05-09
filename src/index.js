const express = require("express");
// const cors = require('cors');

const app = express();

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'us-cdbr-east-06.cleardb.net',
//   user: 'bbf6fd3aa26a15',
//   password: 'caa679b6',
//   database: 'heroku_4d85e7e8281f7b8',
// });

// const corsOptions ={
//   origin:'http://localhost:8080',
//   credentials:true, //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// app.use(cors());

// app.get('/', (req, res) => {
//   connection.query('SELECT * FROM member', (err, rows) => {

//       res.json(rows);
    
//   });
// });
app.get('/', (req, res) => {
  res.send('hi')
});

app.use('/api/login', require(__dirname + '/routes/login'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});