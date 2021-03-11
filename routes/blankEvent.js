var events = require('../views/events.json');

exports.view = function(req, res){
  var id = req.params.id;
	var name;
  var image;
  var eventType;
  var petType;
  var breed;
  var time;
  var location;
  var description;
  var createdBy;
  var attending;
  var yours;

console.log(id);
	for(var i = 0; i < events.events.length; i++)
	{
        if(events.events[i].id == id) {
            image = events.events[i].image;
            name = events.events[i].eventName;
            eventType = events.events[i].eventType;
            petType = events.events[i].petType;
            breed = events.events[i].breed;
            time = events.events[i].time;
            location = events.events[i].location;
            description = events.events[i].description;
            createdBy = events.events[i].createdBy;
            attending = events.events[i].attending;
            yours = events.events[i].yours;
        }
	}

    var event = {
      'id': id,
      'image': image,
      'eventName': name,
      'eventType': eventType,
      'petType': petType,
      'breed': breed,
      'time': time,
      'location': location,
      'description': description,
      'createdBy': createdBy,
      'attending': attending,
      'yours': yours
    }

    res.render('blankEvent', event);
};	