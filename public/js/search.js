'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

$("#petType").change(function() {
	if ($(this).val() == "dogs") {
		$('#dogBreedDiv').show();
    } else {
    	$('#dogBreedDiv').hide();
    }
});
$("#petType").trigger("change");