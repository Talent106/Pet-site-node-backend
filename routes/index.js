var express = require('express');
var router = express.Router();
var app = require('../controllers/app');

/* GET home page. */
router.get('/', app.getData);
router.post('/auth/register', app.register);

module.exports = router;
