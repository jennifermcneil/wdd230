// Hamburger button
// const hamburgerButton = document.querySelector('.hambugerBtn');
// const miniNav = document.querySelector('.navigation');

// hamburgerButton.addEventListener('click', () => {miniNav.classList.toggle('responsive')}, false);
// hamburgerButton.addEventListener('click', () => {hamburgerButton.classList.toggle('responsive')}, false);
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

hambutton.addEventListener('click', () => {hambutton.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};