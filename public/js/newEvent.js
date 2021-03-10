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

$("#petType").change(function() {
	if ($(this).val() == "Dog") {
		$('#dogBreedDiv').show();
		$('#catBreedDiv').hide();
    } else if ($(this).val() == "Cat") {
    	$('#catBreedDiv').show();
    	$('#dogBreedDiv').hide();
    } else {
    	$('#dogBreedDiv').hide();
    	$('#catBreedDiv').hide();
    }
});
$("#petType").trigger("change");