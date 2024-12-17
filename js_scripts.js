
// Simple Scroll Animation
window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll('.tjeneste');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
