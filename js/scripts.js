// Nav Elements Scrolling Animations
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

section1Observer.observe(sections[0]);
section2Observer.observe(sections[1]);
section3Observer.observe(sections[2]);

// Scrolling Animations
const hiddenElements = document.querySelectorAll('.hidden');
const offScreen = document.querySelector('.off-screen');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            offScreen.classList.add('on-screen');
        } else {
            entry.target.classList.remove('show');
            offScreen.classList.remove('on-screen');
        }
    });
}, {threshold: 0.55,});

hiddenElements.forEach((el) => scrollObserver.observe(el));