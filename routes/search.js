var dogBreeds = require('../views/dogBreeds.json');

exports.view = function(req, res){
	//console.log(dogBreeds);
    res.render('search', dogBreeds);
};