const info = 'aec4fb444210e21d8c91b0b6f82f2bba';

// the div that will hold the weather icon and temperature
const currentConditions = document.querySelector('.currentconditions');

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Madera,ca,us&units=imperial&APPID=${info}`

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    // create an img element to hold the weather icon
    const icon = document.createElement('img');
    // create an p element to hold the temperature
    const temp = document.createElement('p');

    // set variables from the html elements
    const wind = document.querySelector('#windSpeed');
    const description = document.querySelector('#description');

    // set variables to a value
    const currentTemp = jsObject.main.temp;
    const windSpeed = jsObject.wind.speed;
    const weatherIcon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const weatherDescription = jsObject.weather[0].description;
    const degree = String.fromCodePoint(0x2109);

    // add the image and p elements
    currentConditions.appendChild(icon);
    currentConditions.appendChild(temp);

    // add classes for styling
    icon.classList.add('icon');
    temp.classList.add('temperature');

    // set html elements to the values
    temp.textContent = `${currentTemp.toFixed(0)}${degree}`;
    icon.setAttribute('src', weatherIcon);
    icon.setAttribute('alt', weatherDescription);
    description.textContent = weatherDescription;
    wind.textContent = windSpeed.toFixed();

    // To check for the windchill
    let windchill = '';
    if (currentTemp <= 50 && windSpeed > 3) {
      windchill = windChill(currentTemp, windSpeed);
      windchill = `${windchill}&#176;F`;
    } else {
      windchill = 'N/A';
    }

    document.querySelector('#windChill').innerHTML = windchill;

    // The formula to calculate the wind chill factor. The .toFixed is to round the number.
  })
  
  function windChill (temp, speed) {
    return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed();
}