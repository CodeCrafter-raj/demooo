// Intersection Observer for scroll-triggered animation
document.addEventListener("DOMContentLoaded", function() {
    const instructorSection = document.querySelector(".instructor-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Once visible, stop observing
            }
        });
    }, { threshold: 0.3 }); // Adjust threshold to trigger animation earlier or later

    observer.observe(instructorSection);
});
