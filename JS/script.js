

function toggleMenu(){

    const menu = document.getElementById('menu-overlay');
    const burger = document.querySelector('.burger');
    const logo = document.getElementById('logo');
    const logoToggle = document.getElementById('mobile-logo');

    menu.classList.toggle('active');
    burger.classList.toggle('active');
    logo.classList.toggle('logo-color');
    logoToggle.classList.toggle('logo-toggle');
}