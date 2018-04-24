const express = require('express');
const hello = require('./hello/index');
const category = require('./routes/categories/index');


module.exports = function (app) {
    app.use('/', hello);
    app.use('/category', category);
}

