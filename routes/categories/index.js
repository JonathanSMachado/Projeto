var express = require('express');
//var create = require('../../controller/categories/services/create');
//var list = require('../../controller/categories/services/list');
var controller = require('../../controller/categories/category');

var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.list);

module.exports = router;