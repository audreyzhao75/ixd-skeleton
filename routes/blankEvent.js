var events = require('../views/events.json');

exports.view = function(req, res){
	var name = req.params.eventName;
	var eventType = req.params.eventType;
	var petType = req.params.petType;
	var breed = req.params.breed;
	var time = req.params.time;
	var location = req.params.location;

    res.render('blankEvent', {
    	'eventName': name,
    	'eventType': eventType,
    	'petType': petType,
    	'breed': breed,
    	'time': time,
    	'location': location
    });
};