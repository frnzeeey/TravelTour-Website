// destinationanim.js or reuse existing fade observer
const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => {
  observer.observe(section);
});
