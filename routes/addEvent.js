var events = require("../views/events.json");

exports.addEvent = function(request, response) { 
        var breed;
        var image;

        if(request.query.petType == 'Dog') {
                if(request.query.dogBreed == '') {
                        breed = "no breed specified";
                } else {
                        breed = request.query.dogBreed;
                }
                image = 'blep.jpeg';
        } else if(request.query.petType == 'Cat') {
                if(request.query.catBreed == '') {
                        breed = "no breed specified";
                } else {
                        breed = request.query.catBreed;
                }
                image = 'cats/uwu.jpg';
        } else {
                //if not cat or dog
                breed = "no breed specified";
                image = "sixth college represent.jpg"
        }

	var newEvent = {
                "id": events.events.length + 1,
                "image": image,
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