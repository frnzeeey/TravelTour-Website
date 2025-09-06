// destinationanim.js
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".destination-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in"); // fade out when scrolling up
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
