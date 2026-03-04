// Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
},{ threshold: 0.2 });

document.querySelectorAll(".activity-card, .section-title").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.querySelector(".progress-bar").style.width = progress + "%";
});