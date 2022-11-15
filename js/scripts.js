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

const hoverNav = document.querySelector('.hover-nav');
const navBar = document.querySelector('.nav-bar');

const aboutSection = document.querySelector('.about');

const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            hoverNav.style.boxShadow = '0px 0px 10px 1px #000000';
            navBar.style.boxShadow = '0px -5px 25px 2px #000000';

        }
        else {
            hoverNav.style.boxShadow = '0px 0px 10px 1px #ffffff';
            navBar.style.boxShadow = '0px -5px 25px 2px #ffffff';
        }
    })
}, {
    threshold: 0.4,
    
})
observer.observe(aboutSection);


const sections = document.querySelectorAll('.main-section');
const navLink1 = document.querySelector('.hover-nav a:nth-child(1)');
const navLink2 = document.querySelector('.hover-nav a:nth-child(2)');
const navLink3 = document.querySelector('.hover-nav a:nth-child(3)');

// const activeLinkStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
//     padding: '0px 20px'
// }

// Object.assign(button.style, style);

const section1Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLink1.style.color = '#ffffff';
            navLink1.style.backgroundColor = '#000000';
            navLink1.style.padding = '0px 20px';

        }
        else {
            navLink1.style.color = '#000000';
            navLink1.style.backgroundColor = '#f6f5f2';
            navLink1.style.padding = '0px 20px';
        } 
    })
}, {
    threshold: 0.5,
})

const section2Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLink2.style.color = '#ffffff';
            navLink2.style.backgroundColor = '#000000';
            navLink2.style.padding = '0px 20px';

        }
        else {
            navLink2.style.color = '#000000';
            navLink2.style.backgroundColor = '#f6f5f2';
            navLink2.style.padding = '0px 20px';
        } 
    })
}, {
    threshold: 0.4,
})

const section3Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLink3.style.color = '#ffffff';
            navLink3.style.backgroundColor = '#000000';
            navLink3.style.padding = '0px 20px';

        }
        else {
            navLink3.style.color = '#000000';
            navLink3.style.backgroundColor = '#f6f5f2';
            navLink3.style.padding = '0px 20px';
        } 
    })
}, {
    threshold: 0.5,
})

// sections.forEach((el) => sectionObserver.observe(el));
section1Observer.observe(sections[0]);
section2Observer.observe(sections[1]);
section3Observer.observe(sections[2]);


// Three.js
