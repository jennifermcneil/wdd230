// getting the content for the variables
let temp = parseFloat(document.querySelector('#temperature').textContent);
let windspeed = parseFloat(document.querySelector('#windSpeed').textContent);
let windchill = '';


// To check for the windchill
if (temp <= 50 && windspeed > 3) {
  windchill = windChill(temp, windspeed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = 'N/A';
}

document.querySelector('#windChill').innerHTML = windchill;

// The formula to calculate the wind chill factor. The .toFixed is to round the number.
function windChill (temp, speed) {
  return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed();
}