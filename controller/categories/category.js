/*
*
* Controlador responsável por receber a requisição, tratar, executar query e retornar o resultado
*
*/

module.exports.create = function(req, res) {
    var data = req.body;

    if(data){

        var create = require('./services/create');
        create(res, res , data);
        
    }
}

module.exports.list = function(req, res) {
    var list = require('./services/list');
    list(req, res);
}