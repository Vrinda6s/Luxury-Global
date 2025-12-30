// Luxury Global Website Script

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 1)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Fade-in animation on scroll
function fadeInOnScroll() {
    const sections = document.querySelectorAll('.section-animate');
    const scrollTop = window.pageYOffset;

    sections.forEach(section => {
        const offset = section.offsetTop - window.innerHeight + 100;
        if (scrollTop > offset) {
            section.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// Initialize fade-in for visible sections on load
document.addEventListener('DOMContentLoaded', function() {
    fadeInOnScroll();
});

// Destinations Carousel for Service Page
function initDestinationsCarouselService() {
    const track = document.querySelector('#destinations-service .destinations-track');
    if (!track) return;
    const prevBtn = document.getElementById('prev-btn-service');
    if (!prevBtn) return;
    const nextBtn = document.getElementById('next-btn-service');
    if (!nextBtn) return;
    const destinations = document.querySelectorAll('#destinations-service .destination');
    let currentIndex = 0;
    const visibleItems = 4;
    const totalItems = destinations.length;
    const itemWidth = 200 + 16;

    track.style.width = `${totalItems * itemWidth}px`;

    console.log('init service carousel');

    function updateCarousel() {
        const translateX = -currentIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
        console.log('update carousel', translateX);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
    });
}

// Destinations Carousel
function initDestinationsCarousel() {
    const track = document.querySelector('#destinations .destinations-track');
    if (!track) return;
    const prevBtn = document.getElementById('prev-btn');
    if (!prevBtn) return;
    const nextBtn = document.getElementById('next-btn');
    if (!nextBtn) return;
    const destinations = document.querySelectorAll('#destinations .destination');
    let currentIndex = 0;
    const visibleItems = 3; // Show 3 at a time
    const totalItems = destinations.length;
    const itemWidth = 200 + 16; // 200px width + 0.5rem margin * 2 * 16px

    track.style.width = `${totalItems * itemWidth}px`;

    function updateCarousel() {
        const translateX = -currentIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }

    prevBtn.addEventListener('click', () => {
        console.log('prev clicked');
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        console.log('next clicked');
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
    });
}


// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initDestinationsCarousel();
    initDestinationsCarouselService();
});