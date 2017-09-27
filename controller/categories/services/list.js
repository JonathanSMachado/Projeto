var model = require('../../../model/categories/category');

module.exports = function(req, res) {

    model.findAll(req, res);
}