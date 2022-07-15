const requestURL = 'https://jennifermcneil.github.io/wdd230/templefinal/data/data.json';
const templeCards = document.querySelector('.temple-cards');

function fetchData(){
    const data = fetch(requestURL)
  .then((response) =>
    response.json())
    .then((data) => {
        return data
    })
    return data
  }
 
  
function dispalyTemples(temples) {
  // Create elements to add to the document
  let card = document.createElement('section');
  card.classList.add('spot', 'pad');
  let templeName = document.createElement('h3');
  templeName.classList.add('header')
  let templeImage = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let services = document.createElement('p');
  let servicesList = document.createElement('ul');
  let history = document.createElement('p');
  let historyList = document.createElement('ul');
  let likeBtn = document.createElement('button');
  likeBtn.classList.add('btn', 'like')


  // Add the textContent property to fill the temple cards
  templeName.textContent = `${temples.name}`;
  address.textContent = `Address: ${temples.address}, ${temples.city}, ${temples.state}`;
  phone.textContent = `Phone: ${temples.phone}`;
  services.textContent = `Services offered:`;
  servicesList.innerHTML = `<li>${temples.clothing}</li><li>${temples.housing}</li><li>${temples.distribution}</li>`;
  history.textContent = `Some temple history:`;
  historyList.innerHTML = `<li>Announced - ${temples.announced}</li><li>Groundbreaking - ${temples.groundbreaking}</li><li>Dedicated - ${temples.dedicated}</li>`;
  likeBtn.textContent = `Like`;

  // set the img attributes for the images
  templeImage.setAttribute('src', temples.imageurl);
  templeImage.setAttribute('alt', `Image of the ${temples.name}`);
  templeImage.setAttribute('loading', 'lazy');

  // add the temple information to the temple section(card)
  card.appendChild(templeName);
  card.appendChild(templeImage);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(services);
  card.appendChild(servicesList);
  card.appendChild(history);
  card.appendChild(historyList);
  card.appendChild(likeBtn);

  // add cards to the templeCards div 
  templeCards.appendChild(card);

  likeBtn.addEventListener('click', () => { 
    if (window.localStorage.getItem('liked')) {
      likeBtn.classList.toggle('liked')}
    else {
      window.localStorage.setItem('liked', 'on');
      likeBtn.classList.toggle('liked')
    }
    })
}
async function flow(){
    //get data back
    const temples = await fetchData ()
    //createElements
    temples.temples.
    forEach((obj)=> {dispalyTemples(obj)})

  }
  flow ()