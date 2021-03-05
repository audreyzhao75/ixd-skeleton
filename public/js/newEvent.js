/*
 * Create Event.
 */

$(document).ready(function() {
	initializePage();
})

function initializePage() {
    $('.alert').hide();
}

function viewEvent(e) {
    $('.alert').show();
    console.log('Submitted');
}