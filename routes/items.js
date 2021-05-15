const express = require('express');
const items = require('../controllers/items');

const router = express.Router();

router.get('/items', items.getItems());

router.get('/items/:id(\\d+)', items.getItem);

router.get('/items/mid', items.getItems({wheel: 'mid'}));

router.get('/items/left', items.getItems({wheel: 'left'}));

router.get('/items/right', items.getItems({wheel: 'right'}));

router.get('/items/category/:cat', items.getItemCat);

router.get('/items/rate/:min-:max', items.getItemRateRange);

module.exports = router;