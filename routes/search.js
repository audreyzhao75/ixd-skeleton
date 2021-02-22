var breeds = require('../views/breeds.json');

exports.view = function(req, res){
	//console.log(dogBreeds);
    res.render('search', breeds);
};