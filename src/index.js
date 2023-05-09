const express = require("express");
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const corsOptions ={
  origin:'http://localhost:8080',
  credentials:true, //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('hi')
// });

app.use('/api/login', require(__dirname + '/routes/login'));
app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});