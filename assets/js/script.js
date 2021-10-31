// Mostrar o menu ao clicar no ícone 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
}

/* Fechar o menu ao clicar em um item da lista */
const links = document.querySelectorAll('nav .menu ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    });
}

// Ao clicar no home, o scroll da página vai para o início dela 
const linksHome = document.querySelectorAll('.link-home');
const home = document.querySelector('#home');

for (const linkHome of linksHome) {
    linkHome.addEventListener('click', function() {
        scrollTo(0, 0);
    });
}

// Ao descer um pouco a página, aparecer uma sombra abaixo do header 
const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;

function headerShadow() {
if(window.scrollY >= headerHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll');
} else {
    // scroll menor que a altura do header
    header.classList.remove('scroll');
}
}

const buttonToTop = document.querySelector('.button');
function buttonBackToTop() {
    if (window.scrollY >= 500) {
        buttonToTop.classList.add('back-to-top');
    } else {
        buttonToTop.classList.remove('back-to-top');
    }
}

window.addEventListener('scroll', function() {
    headerShadow();
    buttonBackToTop();
});