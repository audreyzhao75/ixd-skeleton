var events = require('../views/events.json');

exports.eventInfo = function(req, res){
  var id = req.params.id;
	var event;

	for(var i = 0; i < events.events.length; i++) {
    	if(events.events[i].id == id) {
      	//change attending
      	events.events[i].attending = !events.events[i].attending;
      	event = events.events[i];
  		}
	}

    res.json(event);
};	
