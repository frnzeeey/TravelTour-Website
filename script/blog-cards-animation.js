// Blog fade in/out animation
const blogCards = document.querySelectorAll(".blog-card");

const blogObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("visible");
      entry.target.classList.add("hidden");
    }
  });
}, { threshold: 0.2 });

// ✅ Works for future blogs too
blogCards.forEach(card => {
  blogObserver.observe(card);
});