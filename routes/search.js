var breeds = require('../views/breeds.json');

exports.view = function(req, res){
    res.render('search', breeds);
};