


// const modifiedDate = new Date(document.lastModified);
// console.log(modifiedDate)

// const year = modifiedDate.getFullYear()
// const month = modifiedDate.getMonth()
// const date = modifiedDate.getDate()
// const currentDate = `${date}/${month}/${year}`
// console.log(currentDate)

// document.getElementById('currentDate').innerText = newModifiedDate

const d = new Date();
const year = d.getFullYear();
console.log(d)
// using getElementById
document.getElementById('currentYear').textContent = year;
document.getElementById('lastUpdated').textContent = document.lastModified;


// // // using querySelector
// const date = document.querySelector('#currentdate');

// // try {
// //   const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// //   date2.textContent = new Date().toLocaleDateString('en-UK', options);
// } catch (e) {
//   alert('Error with code or your browser does not support Locale');
// }
//   */
