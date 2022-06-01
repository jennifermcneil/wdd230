// Number of days since the user has visted for the discover page


let lastVisit = document.querySelector('#lastVisit');

// get the timestamp from the users lastvisit from localStorage
const lastvisit = Number(localStorage.getItem('lastvisit'));

// math to convert milliseconds to days
const FACTOR = 1000 * 60 * 60 * 24;//

// Subtract the last visit from the current visit or time
const currentvisit = Date.now() - lastvisit;

// Math to get the number of days
const daysbetween = currentvisit / FACTOR;

const firstMessage = `Welcome back! It has been ${Math.round(daysbetween)} days since your last visit.`
const repeatMessage = 'Welcome, This is your first visit.'

// display to the page how many days since the user's last visit
if (lastvisit !== 0) {
  lastVisit.textContent = firstMessage;
} else {
  lastVisit.textContent = repeatMessage;
}


// set the localStorage with a time stamp to the users current visit to the doscover page
localStorage.setItem('lastvisit', Date.now())