// Hamburger button
const hamburgerButton = document.querySelector('.hambugerBtn');
const miniNav = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {miniNav.classList.toggle('responsive')}, false);
hamburgerButton.addEventListener('click', () => {hamburgerButton.classList.toggle('responsive')}, false);