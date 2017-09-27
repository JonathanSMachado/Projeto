var express = require('express');
var main = require('./services/main');

var router = express.Router();

router.get('/', main);

module.exports = router;