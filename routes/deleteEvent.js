var events = require("../views/events.json");

exports.deleteEvent = function(request, response) {  
  var id = request.query.id;
  var name;
  var image;
  var eventType;
  var petType;
  var breed;
  var time;
  var location;
  var description;
  var attending;
  var yours;

  console.log(request.query.id);
  for(var i = 0; i < events.events.length; i++) {
        if(events.events[i].id == id) {
                console.log("Event found! Deleting...");
                events.events.splice(i, 1);
        }
  }

	response.render('index', events);
 }