var events = require('../views/events.json');

exports.view = function(req, res){
	var name = req.params.eventName;
  var image;
	var eventType;
  var petType;
  var breed;
  var time;
  var location;
  var description;
  var attending;


	for(var i = 0; i < events.events.length; i++)
	{
    if(events.events[i].eventName == name) {
      image = events.events[i].image;
      eventType = events.events[i].eventType;
      petType = events.events[i].petType;
      breed = events.events[i].breed;
      time = events.events[i].time;
      location = events.events[i].location;
      description = events.events[i].description;
      attending = events.events[i].attending;
  	}
	}

    res.render('blankEvent', {
      'image': image,
    	'eventName': name,
    	'eventType': eventType,
    	'petType': petType,
    	'breed': breed,
      'time': time,
      'location': location,
      'description': description,
      'attending': attending
    });
};	