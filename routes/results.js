var events = require('../views/events.json');

exports.view = function(req, res){
	var resultEvents = {"events": []};

	for(var i = 0; i < events.events.length; i++) {
		//if match event type
		if(events.events[i].eventType == req.query.eventType) {
			//match pet type dog
			if(events.events[i].petType == req.query.petType && req.query.petType == "Dog") {
				if(req.query.dogBreed == "") {
					if(req.query.eventName == "" || events.events[i].eventName == req.query.eventName) {
						resultEvents.events.push(events.events[i]);
					}
				} else if(events.events[i].breed == req.query.dogBreed) {
					resultEvents.events.push(events.events[i]);
				}
			} else if (events.events[i].petType == req.query.petType && req.query.petType == "Cat") {
				if(req.query.catBreed == "") {
					if(req.query.eventName == "" || events.events[i].eventName == req.query.eventName) {
						resultEvents.events.push(events.events[i]);
					}
				} else if(events.events[i].breed == req.query.catBreed) {
					resultEvents.events.push(events.events[i]);
				}
			} else if(events.events[i].petType == req.query.petType) {
				//animal other than cat or dog
				resultEvents.events.push(events.events[i]);
			}
		}
	}

    console.log(resultEvents);
    res.render('results', resultEvents);
};