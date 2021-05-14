const express = require('express');
const items = require('../controllers/items');

const router = express.Router();

router.get('/items', items.getItems);

router.get('/items/:id', items.getItem);

module.exports = router;