//Functions

window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


function toggleParagraph() {
    const paragraph = document.getElementById('para1');
    paragraph.classList.toggle('hidden');
    paragraph.classList.toggle('visible');
}
