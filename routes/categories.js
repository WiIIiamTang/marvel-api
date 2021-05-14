const express = require('express');
const cat = require('../controllers/categories');

const router = express.Router();

router.get('/categories', cat.getCategories);

module.exports = router;