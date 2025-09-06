// Fade in/out on scroll
const galleryItems = document.querySelectorAll(".gallery-item");

const observer = new IntersectionObserver(entries => {
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

galleryItems.forEach(item => {
  observer.observe(item);
});

// Modal functionality
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function openModal(index) {
  modal.style.display = "block";
  modalImg.src = galleryItems[index].querySelector("img").src;
  currentIndex = index;
}
function closeModal() { modal.style.display = "none"; }
function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].querySelector("img").src;
}
function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].querySelector("img").src;
}

galleryItems.forEach((item, i) => {
  item.addEventListener("click", () => openModal(i));
});
closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Keyboard controls
document.addEventListener("keydown", e => {
  if (modal.style.display === "block") {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  }
});
