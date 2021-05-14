const express = require('express');
const double = require('../controllers/double');

const router = express.Router();

router.get('/double', double.getDouble);

module.exports = router;