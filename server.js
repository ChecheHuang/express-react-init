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

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, async function () {
  await connection.connectAsync();
  console.log('listening on port ' + port);
});
