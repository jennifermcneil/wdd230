const resquestURL =
  'https://jennifermcneil.github.io/wdd230/chamber/data/data.json'
const cards = document.querySelector('.d-cards')

function fetchData() {
  const data = fetch(resquestURL)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  return data
}

function displayBusinesses(business) {
  //Create elements to add to the document
  let card = document.createElement('section')
  card.classList.add('directoryBox', 'bus-card')
  let businessName = document.createElement('h2')
  let logo = document.createElement('img')
  let address = document.createElement('p')
  let phone = document.createElement('p')
  let website = document.createElement('a')
  let membershiplevel = document.createElement('p')

  // Add the textContent property to fill the directory
  businessName.textContent = `${business.businessname}`
  address.textContent = `${business.address}, ${business.city}, ${business.state}`
  phone.textContent = `${business.cellphone}`
  website.innerHTML = `${business.website}`
  membershiplevel.textContent = `${business.membershiplevel}`

  website.setAttribute('href', '#')

  // Set the img attributes for the logos
  logo.setAttribute('src', business.imageurl)
  logo.setAttribute('alt', `Logo of ${business.businessName}`)
  logo.setAttribute('loading', 'lazy')

  // Add the business information to the section(card)
  card.appendChild(logo)
  card.appendChild(businessName)
  card.appendChild(address)
  card.appendChild(phone)
  card.appendChild(website)
  card.appendChild(membershiplevel)
  console.log(card)
  // Add/append the existing HTML with the d-cards with the section(card)
  cards.appendChild(card)
}

async function flow() {
  // get data back
  const businesses = await fetchData()
  // createElements
  businesses.businesses.forEach((obj) => {
    displayBusinesses(obj)
  })
}

flow()

const listView = document.querySelector('.list-view')
const cardView = document.querySelector('.grid-view')

listView.addEventListener(
  'click',
  () => {
    cards.classList.add('dir-list')
  },
  true
)
listView.addEventListener(
  'click',
  () => {
    cards.classList.remove('dir-cards')
  },
  true
)

cardView.addEventListener(
  'click',
  () => {
    cards.classList.add('dir-cards')
  },
  true
)
cardView.addEventListener(
  'click',
  () => {
    cards.classList.remove('dir-list')
  },
  true
)

function onload(){
    cards.classList.add('dir-cards')
}

// const resquestURL = 'https:jennifermcneil.github.io/wdd230/chamber/data/data.json';
// const cards = document.querySelector('d-cards');

// fetch(resquestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         const businesses = jsonObject['businesses'];
//         businesses.forEach(displayBusinesses);
//     });

// function displayBusinesses(business) {
//     //Create elements to add to the document
//     let card = document.createElement('section');
//     card.classList.add('directoryBox', 'bus-card');
//     let businessName = document.createElement('p');
//     let logo = document.createElement('img');
//     let address = document.createElement('p');
//     let phone = document.createElement('p');
//     let website = document.createElement('a');

//     // Add the textContent property to fill the directory
//     businessName.textContent = `${business.businessname}`;
//     address.textContent = `${business.address}, ${business.city}, ${business.state}`;
//     phone.textContent = `${business.cellphone}`;
//     website.innerHTML = `${business.website}`;

//     website.setAttribute('href', "#")

//     // Set the img attributes for the logos
//     logo.setAttribute('src', business.imageurl);
//     logo.setAttribute('alt', `Logo of ${business.businessName}`);
//     logo.setAttribute('loading', 'lazy');

//     // Add the business information to the section(card)
//     card.appendChild(logo);
//     card.appendChild(businessName);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);

//     // Add/append the existing HTML with the d-cards with the section(card)
//     cards.appendChild(card);
// }

// const listView = document.querySelector('.list-view');
// const cardView = document.querySelector('.grid-view');

// listView.addEventListener('click', () => {cards.classList.add('dir-list')}, true);
// listView.addEventListener('click', () => {cards.classList.remove('dir-cards')}, true);

// cardView.addEventListener('click', () => {cards.classList.add('dir-list')}, true);
// cardView.addEventListener('click', () => {cards.classList.remove('dir-cards')}, true);