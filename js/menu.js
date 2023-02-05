const hamburgerNav = document.getElementById('hamburger-nav-btn');
const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');
const bar3 = document.getElementById('bar-3');
const navMenu = document.getElementById('nav-menu');
let menuOpen = false;

hamburgerNav.addEventListener('click', () => {
    if (!menuOpen) {
        hamburgerNav.classList.add('open');
        menuOpen = true;
        navMenu.style.right = '0px';

    }
    else {
        hamburgerNav.classList.remove('open');
        menuOpen = false;
        navMenu.style.right = '-100%';
    }
});
