// Menu Button

const taregetButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const hideScrolllbar = document.querySelector('#backToTop');

taregetButton.addEventListener('click', () => {
    header.classList.toggle('active-menu');
    hideScrolllbar.classList.toggle('hideScrolllbar');
})