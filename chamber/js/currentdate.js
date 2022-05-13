const d = new Date();
const year = d.getFullYear();

document.getElementById('currentYear').textContent = year;
document.querySelector('#lastUpdated').textContent = document.lastModified;