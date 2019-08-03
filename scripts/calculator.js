let age = 0;
let sector = 0;
let time = 0;
let total = 0;

const toSectorButton = document.getElementById('to-sector');
const toTimeButton = document.getElementById('to-time');
const endButton = document.getElementById('end');

document.getElementById('sector-selection').style.display = 'none';
document.getElementById('time-selection').style.display = 'none';
document.getElementById('results-selection').style.display = 'none';

toSectorButton.addEventListener('click', function(event) {
  // hide age-selection area
  document.getElementById('age-selection').style.display = 'none';
  // show sector-selection area
  document.getElementById('sector-selection').style.display = 'block';
  // set the user's age
  const ageValue = document.querySelector('input[name="age"]:checked').value;

  age = parseFloat(ageValue);

  console.log(age);
});

toTimeButton.addEventListener('click', function(event) {
  // hide age-selection area
  document.getElementById('sector-selection').style.display = 'none';
  // show sector-selection area
  document.getElementById('time-selection').style.display = 'block';
  // set the user's age
  const sectorValue = document.getElementById('sector').value;

  sector = parseFloat(sectorValue);

  console.log(sector);
});

endButton.addEventListener('click', function(event) {
  // hide age-selection area
  document.getElementById('time-selection').style.display = 'none';
  // show sector-selection area
  document.getElementById('results-selection').style.display = 'block';
  // set the user's age
  const timeValue = document.querySelector('input[name="year"]:checked').value;

  time = parseFloat(timeValue);

  total = Math.ceil(age + (time * sector));

  document.getElementById('amount').innerText = '£' + total;

  console.log(time);
});