/** Hero banner slider */

/* filepath: /Users/abidhussainmalik/Sites/kashmiruniversity/www.kashmiruniversity.net/pub/js/slider.js */
let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = 3;

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Add click handlers for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});