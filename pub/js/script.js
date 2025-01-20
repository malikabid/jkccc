document.querySelectorAll('.navbar-list li a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Remove active class from all <li> elements
        document.querySelectorAll('.navbar-list li').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the clicked item's parent <li>
        const currentLi = this.parentElement;
        currentLi.classList.add('active');

        // Find parent menu item and add active class
        const parentLi = currentLi.closest('ul').closest('li');
        if (parentLi) {
            parentLi.classList.add('active');
        }
    });
});


document.querySelector('.menu-button').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggles the "active" class to show/hide the dropdown
});

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