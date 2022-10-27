const connection = require('./utils/db');
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

let apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.post('/webhook', function (req, res) {
  const exec = require('child_process').exec;
  exec('sh webhook.sh', (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  res.send('webhook');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(function (err, req, res) {
  console.log('ERROR:', err);
  res.status(500);
  res.send('500 - Internal Sever Error 請洽系統管理員');
});

const port = process.env.PORT || 5000;

app.listen(port, async function () {
  await connection.connectAsync();
  console.log('listening on port ' + port);
});
