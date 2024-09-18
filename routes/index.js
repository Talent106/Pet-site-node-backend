var express = require('express');
var router = express.Router();
var app = require('../controllers/app');

/* GET home page. */
router.post('/register', app.register);

module.exports = router;
