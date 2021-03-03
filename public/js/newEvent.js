/*
 * Create Event.
 */
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
  const inputCollection = form.getElementsByTagName('input');
  const inputArray = [...inputCollection];
  const data = {};
  inputArray.map(input => {
    const { name, value } = input;
    const splitName = name.split('.');
    generateObj(data, splitName, value);
  })
  return data;
}
const getDataBtn = document.getElementById('getDataBtn');
getDataBtn.addEventListener('click', () => {
  const data = getData('json');
  console.log(JSON.stringify(data));
})

function viewEvent() {
    $('.submitBtn').html('<div class="alert alert-primary" role="alert"> This event is created! View your <a href="/results" class="alert-link">saved events</a>.</div>');
	//add in .html or .append here later?
}