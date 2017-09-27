var Category = require('./schema/category');

module.exports.create = function(req, res, data) {
    var category = new Category(data);
    
    console.log(category);

    category.save()
        .then(function(created){
            
            if(!created){
                return res.status(404).json({status: false, data: {}});
            }

            return res.status(201).json({status: true, data: created});
        })
        .catch(function(error){
            res.status(500).json({status: false, data: {}});
        });
}

module.exports.findAll = function(req, res) {
    Category.find({})
    .then(function(categories){
        if(!categories || !categories.length) {
            return res.status(404).json({status: false, data: [] });
        }

        return res.status(200).json({status: true, data: categories });
    })
    .catch(function(error){
        return res.status(500).json({status: false, data: [] });
    })
}