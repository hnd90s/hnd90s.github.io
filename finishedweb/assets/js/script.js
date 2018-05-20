var scroll = new SmoothScroll('a[href*="#"]');

var resultPage = document.getElementById('result-page');

/* Calculate */

var totalScore = null;

function calculate (type) {
  if(type === 1) {
    totalScore = 5;
  } else if (type === 2) {
    totalScore = 2;
  } else if (type === 3) {
    totalScore = 5;
  } else if (type === 4) {
    totalScore = 2;
  }
  console.log('total score: ',totalScore);
}

function durationAdd () {
  let timeVal = parseInt(document.getElementById('time').value);
  console.log('timeVal: ', timeVal);
  if(timeVal > 9 && timeVal < 21) {
    totalScore += 1;
    console.log(totalScore);
  } else if(timeVal > 19 && timeVal < 31) {
    totalScore += 2;
    console.log(totalScore);
  } else if(timeVal > 29 && timeVal < 41) {
    totalScore += 3;
    console.log(totalScore);
  } else if(timeVal > 39 && timeVal < 51) {
    totalScore += 4;
    console.log(totalScore);
  } else if(timeVal > 50) {
    totalScore += 5;
    console.log(totalScore);
  }
}

function fuelAdd () {
  let fuelVal = parseInt(document.getElementById('fuelValue').innerHTML);
  console.log('fuelVal: ', fuelVal);
  if(fuelVal >= 1 && fuelVal < 3) {
    totalScore+=1;
    console.log(totalScore);
  } else if(fuelVal > 2 && fuelVal < 5) {
    totalScore+=2;
    console.log(totalScore);
  } else if(fuelVal > 4 && fuelVal < 7) {
    totalScore+=3;
    console.log(totalScore);
  } else if(fuelVal > 6 && fuelVal < 9) {
    totalScore+=4;
    console.log(totalScore);
  } else if(fuelVal > 8) {
    totalScore+=5;
    console.log(totalScore);
  }
}

function fareAdd() {
  let fareVal = parseInt(document.getElementById('fare').value);
  console.log('fareVal: ', fareVal);
  if(fareVal < 50) {
    totalScore+=1;
    console.log(totalScore);
  } else if(fareVal >= 50 && fareVal <= 200) {
    totalScore+=2;
    console.log(totalScore);
  } else if(fareVal > 200 && fareVal <= 400) {
    totalScore+=3;
    console.log(totalScore);
  } else if(fareVal > 400 && fareVal <= 500) {
    totalScore+=4;
    console.log(totalScore);
  } else if(fareVal > 500) {
    totalScore+=5;
    console.log(totalScore);
  }
}

var packageSelection = null;

function packageAdd() {
  if(packageSelection === 1){
    totalScore+=3;
    console.log(totalScore);
  } else if(packageSelection === 2){
    totalScore+=1;
    console.log(totalScore);
  } else if(packageSelection === 3){
    totalScore+=2;
    console.log(totalScore);
  }
  console.log('selection: ', packageSelection);
}

function shippingAdd() {
  let shippingVal = parseInt(document.getElementById('itemValue').innerHTML);
  if(shippingVal >= 1 && shippingVal <= 10) {
    totalScore+=1;
    console.log(totalScore);
  } else if(shippingVal > 10 && shippingVal <= 20) {
    totalScore+=2;
    console.log(totalScore);
  } else if(shippingVal > 20 && shippingVal <= 30) {
    totalScore+=3;
    console.log(totalScore);
  } else if(shippingVal > 30 && shippingVal <= 40) {
    totalScore+=4;
    console.log(totalScore);
  } else if(shippingVal > 40 && shippingVal <= 50) {
    totalScore+=5;
    console.log(totalScore);
  }
  console.log('shippingVal: ', shippingVal);
  calResult();
}

function calResult () {
  // totalScore+=27;
  // console.log('total: ',totalScore);
  resultPage.style.display = 'flex';
  var label = document.getElementById('label');
  var badgeImg = document.getElementById('badge-img');
  var saveImgButton = document.getElementById('save-img');
  if(totalScore >= 5 && totalScore <= 13){
    badgeImg.src = './assets/img/gold-badge-full.svg';
    saveImgButton.href = './assets/img/gold-badge-full.svg';
    console.log('ก');
  } else if(totalScore >= 14 && totalScore <= 26){
    badgeImg.src = './assets/img/silver-badge-full.svg';
    saveImgButton.href = './assets/img/silver-badge-full.svg';
    console.log('ข');
  } else if(totalScore >= 27 && totalScore <= 28){
    badgeImg.src = './assets/img/bronze-badge-full.svg';
    saveImgButton.href = './assets/img/bronze-badge-full.svg';
    console.log('ค');
  }
}

/* Type Selection */

function typeSelect(type) {
  let carHide = document.getElementsByClassName('car-hide');
  let transportHide = document.getElementsByClassName('transport-hide');
  if(type === 1){
    for(let x = 0; x < carHide.length ; x++){
      carHide[x].style.display = 'none';
    }
    for(let y = 0; y < transportHide.length ; y++){
      transportHide[y].style.display = 'flex';
    }
  } else {
    for(let x = 0; x < carHide.length ; x++){
      carHide[x].style.display = 'flex';
    }
    for(let y = 0; y < transportHide.length ; y++){
      transportHide[y].style.display = 'none';
    }
  }
  calculate(type);
}

/* Fare */

var fareRange = document.getElementById('fare');
var fareValue = document.getElementById('fareValue');

fareRange.oninput = function(){
  // console.log(this.value);
  fareValue.innerHTML = this.value;
}

/* Time */

var timeRange = document.getElementById('time');
var timeValue = document.getElementById('timeValue');

timeRange.oninput = function(){
  // console.log(this.value);
  timeValue.innerHTML = this.value;
}

/* Hide */

var hide = document.getElementsByClassName('hide');
function hideDiv () {
  console.log(hide);
}


/* Increment and Decrement */

function valueIncrement(target) {
  console.log(target);
  let targetElement = document.getElementById(target);
  targetElement.innerHTML = parseInt(targetElement.innerHTML) + 1;
}

function valueDecrement(target) {
  console.log(target);
  let targetElement = document.getElementById(target);
  targetElement.innerHTML = parseInt(targetElement.innerHTML) - 1;
}
