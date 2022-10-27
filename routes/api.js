const express = require('express');
const router = express.Router();
const { sample } = require('../controller/sampleController');

router.get('/', sample);

module.exports = router;
