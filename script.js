// script.js - COMPLETE VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(62, 100, 107, 0.98)';
        } else {
            navbar.style.background = 'rgba(62, 100, 107, 0.95)';
        }
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.mountain-card, .forest-content, .attraction-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Ocean slider
    const slides = document.querySelectorAll('.slide');
    const sliderTrack = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-play
    setInterval(nextSlide, 5000);

    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth < 768) {
            document.querySelector('.hero-subtitle').style.fontSize = '1.1rem';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});