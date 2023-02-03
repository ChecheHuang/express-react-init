const express = require('express');
const router = express.Router();
const tokenMiddleware = require('../middleware/tokenMiddleware');
const { login } = require('../controller/memberController');

router.get('/login', login);
router.get('/test', tokenMiddleware, (req, res) => {
  res.json(req.user);
});
module.exports = router;
