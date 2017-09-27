var express = require('express');
var hello = require('./hello/index');
var category = require('./routes/categories/index');


module.exports = function (app) {
    app.use('/', hello);
    app.use('/category', category);
}

