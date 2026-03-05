window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("preloader").style.display = "none";
    }, 500);
});

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getComputedStyle(entry.target).animation || 'fadeIn 0.8s ease forwards';
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe scrollable elements
document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.wlc, .have, .info-cards, .wehave-card, .stats-section, .awards, .card, .stat, .wehave-card a, .news, .news-card, .Gallary, .map, .main-footer');
    scrollElements.forEach(el => {
        observer.observe(el);
    });
});
