const express = require('express')
const router = express.Router()
const connection = require('../utils/db')

router.get('/users', async (req, res) => {
  let queryResults = await connection.queryAsync('SELECT * FROM users;')

  res.json(queryResults)
})

module.exports = router
