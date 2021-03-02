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
}

/*
 * Make an AJAX call to retrieve changed event attendance
 */
function changeAttending(e) {
	// Prevent following the link
	//e.preventDefault();

	//get eventName
	var name = document.getElementById('eventName').innerHTML;
	
	// call AJAX endpoint
	$.get("/editAttend/" + name, updateAttending);

	console.log("User clicked on " + name);
}

function updateAttending(result) {
	if(result['attending']) {
		console.log("You're attending! (checked)");
	} else {
		console.log("You're not attending! :( (unchecked)");
	}

	//add in .html or .append here later?
}