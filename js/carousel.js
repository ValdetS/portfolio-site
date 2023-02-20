let imgArray = [];

let intuneImgs = ['./images/intune-demo.png', './images/intune-demo-2.png', './images/intune-demo-3.png', './images/intune-demo-4.png', './images/intune-demo-5.png'];

let weSaveOnPowerImgs = ['./images/sales-funnel-demo.png', './images/sales-funnel-demo-2.png', './images/sales-funnel-demo-3.png', './images/sales-funnel-demo-4.png']

let cardFuImgs = ['./images/card-fu-demo.png', './images/card-fu-demo-2.jpg', './images/card-fu-demo-3.jpg']

let carousel = document.querySelector('.carousel');
let displayImg = document.querySelector('#display-img');
let miniContainer = document.querySelector('.mini-container');

let counter = 0;

// Get Current Web Page/HTML File
var url = location.href;
var urlFilename = url.substring(url.lastIndexOf('/') + 1);

let initialWidth = window.innerWidth;
window.addEventListener('resize', checkWidth);

function checkWidth() {
    // Compare initial width to current resized width
    if (initialWidth != window.innerWidth) {
        // Reload page if only the width has changed
        window.location.reload();
    }
}

// Change Carousel Contents Based On Web Page/HTML File
if (urlFilename === 'intune-project-page.html') {
    console.log(urlFilename);
    imgArray = intuneImgs;
    getMiniImgs(imgArray);
    displayImg.src = imgArray[counter];
    imgGlow(counter, 'start');


} else if (urlFilename === 'sales-funnel-project-page.html') {
    console.log(urlFilename);
    imgArray = weSaveOnPowerImgs;
    getMiniImgs(imgArray);
    displayImg.src = imgArray[counter];
    imgGlow(counter, 'start');

} else if (urlFilename === 'card-fu-project-page.html') {
    console.log(urlFilename);
    imgArray = cardFuImgs;
    getMiniImgs(imgArray);
    displayImg.src = imgArray[counter];
    imgGlow(counter, 'start');

} else {
    console.log('uh oh!')
}

function getMiniImgs(array) {

    // Check for mobile
    if (window.innerWidth < 414) {

        for (let i = 0; i < array.length; i++) {
            let img = document.createElement('div');
            img.classList.add('mobile-mini-img');
            img.src = array[i];

            img.setAttribute('id', `${i}`);
            img.addEventListener('click', selectImg)

            miniContainer.append(img);
        }

    } else {
        for (let i = 0; i < array.length; i++) {
            let img = document.createElement('img');
            img.classList.add('mini-img');
            img.src = array[i];

            img.setAttribute('id', `${i}`);
            img.addEventListener('click', selectImg)

            miniContainer.append(img);
        }

    }

}


let nextBtn = document.querySelector('#carousel-next-btn');
let prevBtn = document.querySelector('#carousel-prev-btn');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

function next() {
    console.log('clicked!')
    counter += 1;

    if (counter >= imgArray.length) {
        counter = 0;
    }

    changeImg(counter);
    imgGlow(counter, 'next');


    console.log(counter)
}

function prev() {
    console.log('clicked!')
    counter -= 1;
    if (counter < 0) {
        counter = imgArray.length - 1;
    }

    changeImg(counter);
    imgGlow(counter, 'previous');

}



function changeImg() {
    displayImg.src = imgArray[counter];
}

function selectImg() {
    displayImg.src = this.src;
    imgGlow(this.id, 'select');
    counter = parseInt(this.id);
}

function imgGlow(id, input) {


    if (window.screen.width < 414) {
        // Gets Nodelist of elements
        let allMinis = document.querySelectorAll('.mobile-mini-img');
        // Loops through Nodelist array to acces each element
        for (let i = 0; i < allMinis.length; i++) {
            allMinis[i].style.boxShadow = 'none';
            allMinis[i].style.backgroundColor = '#ffffff';

        }
    } else {
        // Gets Nodelist of elements
        let allMinis = document.querySelectorAll('.mini-img');
        // Loops through Nodelist array to acces each element
        for (let i = 0; i < allMinis.length; i++) {
            allMinis[i].style.boxShadow = 'none';
            allMinis[i].backgroundColor = '#ffffff';

        }
    }



    let currentImg = document.getElementById(id);

    if (input == 'select') {


        currentImg.style.boxShadow = '0px 0px 10px 1px #ffffff';
        currentImg.style.backgroundColor = '#000000';

    } else {
        currentImg.style.boxShadow = '0px 0px 10px 1px #ffffff';
        currentImg.style.backgroundColor = '#000000';


    }


    if (input == 'next') {
        if (id == 0) {
            let lastImg = document.getElementById(imgArray.length - 1);
            lastImg.style.boxShadow = 'none';
            lastImg.style.backgroundColor = '#ffffff';


        } else {
            let lastImg = document.getElementById(id - 1);
            lastImg.style.boxShadow = 'none';
            lastImg.style.backgroundColor = '#ffffff';

        }

    }

    if (input == 'previous') {
        if (id == imgArray.length - 1) {
            let lastImg = document.getElementById(0);
            lastImg.style.boxShadow = 'none';
            lastImg.style.backgroundColor = '#ffffff';

        } else {
            let lastImg = document.getElementById(id + 1);
            lastImg.style.boxShadow = 'none';
            lastImg.style.backgroundColor = '#ffffff';

        }

    }

}