// ===== Fade-in Animation on Scroll for Tour Packages =====
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".package-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  fadeSections.forEach(section => observer.observe(section));
});
