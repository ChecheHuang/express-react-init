const jwt = require('jsonwebtoken');
require('dotenv').config();
const sql = require('../utils/db.js');
module.exports.login = async (req, res) => {
  try {
    const username = req.body.username || 'Carl';
    const password = req.body.username || '1234';
    const token = jwt.sign({ username, password }, process.env.TOKEN_SECRET);
    const [result] = await sql.execute('select * from member where id = ?', [
      1,
    ]);
    console.log(result);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'err' });
  }
};
