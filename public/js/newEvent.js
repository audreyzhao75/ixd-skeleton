/*
 * Create Event.
 */

$(document).ready(function() {
	initializePage();
})

function initializePage() {
    $('.alert').hide();
}

$("#submitForm").submit(function(e) {
    e.preventDefault();
});

const generateObj = (obj, arr, val) => {
if (arr.length === 1) {
    obj[arr[0]] = val;
    return;
}
if (!obj[arr[0]]) {
    obj[arr[0]] = {};
}
const restArr = arr.splice(1);
generateObj(obj[arr[0]], restArr, val);
}
const getData = (id) => {
const form = document.getElementById(id);
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
const inputCollection = form.getElementsByTagName('input');
const inputArray = [...inputCollection];
const data = {};
inputArray.map(input => {
    const { name, value } = input;
    const splitName = name.split('.');
    generateObj(data, splitName, value);
});
return data;
}
const getDataBtn = document.getElementById('getDataBtn');
getDataBtn.addEventListener('click', () => {
const data = getData('json');
console.log(JSON.stringify(data));
});

function viewEvent(e) {
    $('.alert').show();
    console.log('Submitted');
}