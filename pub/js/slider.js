/** Hero banner slider */

/* filepath: /Users/abidhussainmalik/Sites/kashmiruniversity/www.kashmiruniversity.net/pub/js/slider.js */
document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const totalSlides = slideElements.length;

    // Create dots dynamically
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
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

    const carousel = document.querySelector('#project-gallery .carousel');
    const prevButton = document.querySelector('#project-gallery .carousel-button.prev');
    const nextButton = document.querySelector('#project-gallery .carousel-button.next');
    let scrollAmount = 0;

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Lightbox functionality
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.close');
    const lightboxPrev = lightbox.querySelector('.prev');
    const lightboxNext = lightbox.querySelector('.next');
    const images = document.querySelectorAll('#project-gallery .carousel img');
    let currentImageIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
    });

    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
    });

    // Swipe functionality for mobile view
    let startX = 0;
    let endX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    lightbox.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    lightbox.addEventListener('touchend', () => {
        if (startX > endX + 50) {
            lightboxNext.click();
        } else if (startX < endX - 50) {
            lightboxPrev.click();
        }
    });
});