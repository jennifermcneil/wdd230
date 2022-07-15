const info = 'aec4fb444210e21d8c91b0b6f82f2bba';

// the div that will hold the weather icon and temperature
const currentConditions = document.querySelector('.current-weather');
const weatherNotify = document.querySelector('#weather-notify')
const weatherAlert = document.querySelector('#weather-alert');
const threeDay = document.querySelector('.three-day');
const dayOne = document.querySelector('.day-one')
const dayTwo= document.querySelector('.day-two')
const dayThree = document.querySelector('.day-three')
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.08&lon=-88.60&units=imperial&APPID=${info}`

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const alerts = jsObject['alerts'];

    // Check to see if the weather alerts need to be populated
    if (alerts !== undefined) {
      // Adds button to weather alert button
      const delAlert = document.createElement('button');
      delAlert.textContent = String.fromCodePoint(0x2716);
      weatherNotify.appendChild(delAlert);
      // button changes display to "none";
      delAlert.addEventListener('click', () => {weatherNotify.classList.add('remove-notify')}, true)
    }
    // Display any alerts 
    if (alerts > 0) {
      alerts.forEach(displayAlerts);
    }

    // Elements for weather
    // Current Weather
    const iconCurrent = document.createElement('img');
    const tempCurrent = document.createElement('p');
    const humidityCurrent = document.createElement('p');
    const descriptionCurrent = document.createElement('p');
    const current = document.createElement('div');
    // Day one wather
    const iconDayOne = document.createElement('img');
    const tempDayOne = document.createElement('p');
    const descriptionDayOne = document.createElement('p');
    const forecastOne = document.createElement('div');
    // Day two wather
    const iconDayTwo = document.createElement('img');
    const tempDayTwo = document.createElement('p');
    const descriptionDayTwo = document.createElement('p');
    const forecastTwo = document.createElement('div');
    // Day three wather
    const iconDayThree = document.createElement('img');
    const tempDayThree = document.createElement('p');
    const descriptionDayThree = document.createElement('p');
    const forecastThree = document.createElement('div');


    
    // Set variables to current weather values.
    const currentTemp = jsObject.current.temp;
    const currentDescription = jsObject.current.weather[0].description;
    const currentWeatherIcon = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const currentHumidity = jsObject.current.humidity;
    const degree = String.fromCodePoint(0x2109);
    // Set variables to three day forecast values
    // First Day
    const firstDayTemp = jsObject.daily[0].temp.max;
    const firstDayIcon = `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
    const firstDayDescript = jsObject.daily[0].weather[0].description;
    // Second Day
    const secondDayTemp = jsObject.daily[1].temp.max;
    const secondDayIcon = `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
    const secondDayDescript = jsObject.daily[1].weather[0].description;
    // Thord Day
    const thirdDayTemp = jsObject.daily[2].temp.max;
    const thirdDayIcon = `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
    const thirdDayDescript = jsObject.daily[2].weather[0].description;

    
    // Add the image and p elements for current weather
    current.appendChild(iconCurrent);
    current.appendChild(tempCurrent);
    currentConditions.appendChild(current);
    currentConditions.appendChild(descriptionCurrent);
    currentConditions.appendChild(humidityCurrent);

    // add classes for styling

    // Set html elements to the values
    tempCurrent.textContent = `${currentTemp.toFixed(0)}${degree}`;
    iconCurrent.setAttribute('src', currentWeatherIcon);
    iconCurrent.setAttribute('alt', currentDescription);
    descriptionCurrent.textContent = currentDescription;
    humidityCurrent.textContent = `${currentHumidity}% humidity`;

    // Add the image and p elements for three day forecast weather
    // Day one
    forecastOne.appendChild(iconDayOne);
    forecastOne.appendChild(tempDayOne);
    dayOne.appendChild(forecastOne);
    dayOne.appendChild(descriptionDayOne);

    // add classes for styling
    forecastOne.classList.add('forcast');

    tempDayOne.textContent = `${firstDayTemp.toFixed(0)}${degree}`;
    iconDayOne.setAttribute('src', firstDayIcon);
    iconDayOne.setAttribute('alt', firstDayDescript);
    descriptionDayOne.textContent = firstDayDescript;

    // Day two
    forecastTwo.appendChild(iconDayTwo);
    forecastTwo.appendChild(tempDayTwo);
    dayTwo.appendChild(forecastTwo);
    dayTwo.appendChild(descriptionDayTwo);

    tempDayTwo.textContent = `${secondDayTemp.toFixed(0)}${degree}`;
    iconDayTwo.setAttribute('src', secondDayIcon);
    iconDayTwo.setAttribute('alt', secondDayDescript);
    descriptionDayTwo.textContent = secondDayDescript;

    // Day three
    forecastThree.appendChild(iconDayThree);
    forecastThree.appendChild(tempDayThree);
    dayThree.appendChild(forecastThree);
    dayThree.appendChild(descriptionDayThree);

    tempDayThree.textContent = `${thirdDayTemp.toFixed(0)}${degree}`;
    iconDayThree.setAttribute('src', thirdDayIcon);
    iconDayThree.setAttribute('alt', thirdDayDescript);
    descriptionDayThree.textContent = thirdDayDescript;

    // add classes for styling
    forecastOne.classList.add('forcast');
    forecastTwo.classList.add('forcast');
    forecastThree.classList.add('forcast');
    current.classList.add('forcast');
    
    threeDay.appendChild(dayOne)
    threeDay.appendChild(dayTwo)
    threeDay.appendChild(dayTwo)
    threeDay.appendChild(dayThree)
  });


  function displayAlerts(alerts) {
    // A function to dsiplay weather alrets and warnings. 
    //Ccreate a p element for each alert and append it to the weatherAlert div
    let event = document.createElement('p');
    let alert = alerts.event;
    event.innerText = alert
    weatherAlert.appendChild(event)
  }