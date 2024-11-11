

function toggleMenu(){

    const menu = document.getElementById('menu-overlay');
    const burger = document.querySelector('.burger');
    const logo = document.getElementById('logo');
    
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    logo.classList.toggle('logo-color');
}