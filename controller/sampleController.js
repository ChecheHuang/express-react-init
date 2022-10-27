const connection = require('../utils/db');

module.exports.sample = async (req, res, next) => {
  console.log(req.body);
  try {
    let queryResults = await connection.queryAsync('SELECT * FROM users;');
    res.json(queryResults);
  } catch (err) {
    next(err);
  }
};
