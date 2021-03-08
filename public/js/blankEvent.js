'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.form-check-input').click(changeAttending);
    $('div.alert').hide();
}

/*
 * Make an AJAX call to retrieve changed event attendance
 */
function changeAttending(e) {
	//get id
	var path = window.location.pathname.split('/');
	var id = path[2];
	//get eventName
	var name = document.getElementById('eventName').innerHTML;
	
	// call AJAX endpoint
	$.get("/editAttend/" + id, updateAttending);

	console.log("User clicked on " + name + " id: " + id);
}

function updateAttending(result) {
	if(result['attending']) {
		console.log("You're attending! (checked)");
        $('#attendingText').html("I'm attending!");
        $('.alert').show();
	} else {
		console.log("You're not attending! :( (unchecked)");
        $('#attendingText').html("Not attending");
        $('.alert').hide();
	}
}