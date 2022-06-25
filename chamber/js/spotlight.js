const resquestURL = 'https://jennifermcneil.github.io/wdd230/chamber/data/data.json';
const spotlightBoxMain = document.querySelector('.spotlightBoxMain');

fetch(resquestURL)
  .then(function (repsone){
    return repsone.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    let gold = businesses.filter(businesses => (businesses.membershiplevel === 'Gold Member'));
    for (i=0; i<3; i++) {
      x = Math.floor(Math.random() * length)
      displaySpotlight(gold[x], `spot${i+1}`);
      gold = gold.filter(business => (business.name != gold[x].name));
    }
  });

  function displaySpotlight(business, spot) {
    // Create elements for spotlight boxes
    let spotlightBox = document.createElement('div');
    spotlightBox.classList.add('placeholderBox', 'spotlightBox', `${spot}`)
    let spotlightSection = document.createElement('section');
    let businessName = document.createElement('h3');
    let logo = document.createElement('img');
    let motto = document.createElement('p');
    let info = document.createElement('div');
    info.classList.add('info');
    let email = document.createElement('p');
    let phone =  document.createElement('p');

    // Add textContent property to fill spotlight boxes
    businessName.textContent = `${business.businessname}`;
    motto.textContent = `${business.motto}`;
    email.textContent = `${business.email}`;
    phone.textContent = `Phone: ${business.cellphone}`;

    // Set img attributes for logos
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo of ${business.businessName}`)

    // Add business information to the spotlight section
    spotlightSection.appendChild(businessName);
    spotlightSection.appendChild(logo);
    spotlightSection.appendChild(motto);
    info.appendChild(email);
    info.appendChild(phone);

    console.log(spotlightSection)
    console.log(info)

    // Add the two sections to the spotlightBoxMain div    
    spotlightBox.appendChild(spotlightSection);
    spotlightBox.appendChild(info);

    spotlightBoxMain.appendChild(spotlightBox)

    console.log(spotlightBoxMain)

  }