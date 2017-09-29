var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var routes = require('./routes');

var app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', './web-app/views');

app.use(express.static('./web-app/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var db = mongoose.connect('mongodb://admin:admin@bd-shard-00-00-5qwjd.mongodb.net:27017,bd-shard-00-01-5qwjd.mongodb.net:27017,bd-shard-00-02-5qwjd.mongodb.net:27017/test?ssl=true&replicaSet=BD-shard-0&authSource=admin', {useMongoClient: true}, function(error){
    console.log(error);
});

routes(app);

app.listen(3000, function(){
    console.log('Servidor ok na porta 3000');
});