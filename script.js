const heroSection = document.querySelector('.hero');

// List of background images
const heroImages = [
    'images/bg1.png',
    'images/bg2.png',
    'images/bg3.png',
    'images/bg4.png',
    'images/bg5.png',
    'images/bg6.png',
    'images/bg7.png',
    'images/bg8.png',
    'images/bg9.png',
    'images/bg10.png'
];

let currentHero = 0;
let slideInterval;

// Function to change background
function showHero(index) {
    heroSection.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
        url('${heroImages[index]}') center/cover no-repeat
    `;
}

// Next slide
function nextHero() {
    currentHero = (currentHero + 1) % heroImages.length;
    showHero(currentHero);
}

// Previous slide
function prevHero() {
    currentHero = (currentHero - 1 + heroImages.length) % heroImages.length;
    showHero(currentHero);
}

// Start automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(nextHero, 4000); // 4 seconds per slide
}

// Stop slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Initial background
showHero(currentHero);
startSlideshow();

// Manual buttons
document.querySelector('.next').addEventListener('click', () => {
    stopSlideshow();
    nextHero();
    startSlideshow();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopSlideshow();
    prevHero();
    startSlideshow();
});