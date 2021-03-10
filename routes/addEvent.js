var events = require("../views/events.json");

exports.addEvent = function(request, response) { 
        var breed;

        if(request.query.petType == 'Dog') {
                breed = request.query.dogBreed;
        } else if(request.query.petType == 'Cat') {
                breed = request.query.catBreed;
        } else {
                //if not cat or dog
                breed = "no breed";
        }

	var newEvent = {
                "id": events.events.length + 1,
                "image": request.query.image,
                "eventName": request.query.eventName,
                "eventType": request.query.eventType,
                "petType": request.query.petType,
                "breed": breed,
                "time": request.query.time,
                "sortBy": "",
                "location": request.query.location,
                "attending": true,
                "yours": true,
                "description": request.query.description
	}
	events.events.push(newEvent);
	response.render('blankEvent', newEvent);
 }