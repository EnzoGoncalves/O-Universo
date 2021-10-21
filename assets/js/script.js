const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
}


const links = document.querySelectorAll('nav .menu ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    });
}

const linkHome = document.querySelector('#link-home');
const home = document.querySelector('#home');

linkHome.addEventListener('click', function() {
    scrollTo(0, 0);
});