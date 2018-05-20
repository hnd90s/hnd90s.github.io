/* Fare */

var fareRange = document.getElementById('fare');
var fareValue = document.getElementById('fareValue');

fareRange.oninput = function(){
  console.log(this.value);
  fareValue.innerHTML = this.value;
}

/* Time */

var timeRange = document.getElementById('time');
var timeValue = document.getElementById('timeValue');

timeRange.oninput = function(){
  console.log(this.value);
  timeValue.innerHTML = this.value;
}

/* Hide */

var hide = document.getElementsByClassName('hide');
function hideDiv () {
  console.log(hide);
}
