var express = require('express');
var router = express.Router();
var products = require('../controllers/products');

/* GET users listing. */
router.post('/', products.addProduct);

module.exports = router;
