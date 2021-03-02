var events = require('../views/events.json');

exports.eventInfo = function(req, res){
	var name = req.params.eventName;
	var event;

	for(var i = 0; i < events.events.length; i++) {
    	if(events.events[i].eventName == name) {
      	//change attending
      	events.events[i].attending = !events.events[i].attending;
      	event = events.events[i];
  		}
	}

  res.json(event);
};	
