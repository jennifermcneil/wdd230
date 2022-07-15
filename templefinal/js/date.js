//Date infomation
const date = new Date();
// Display the copyright year
document.getElementById("currentyear").textContent = date.getFullYear();

// Display when the last time the document was modified
document.getElementById('lastUpdated').textContent = document.lastModified;