var express = require('express');
var main = require('./services/main');

var router = express.Router();

router.get('/', main);
router.get('/teste', function(req, res){
    res.render('teste.html');
});

module.exports = router;