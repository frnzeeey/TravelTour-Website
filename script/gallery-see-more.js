(() => {
  // ===== SEE MORE BUTTON FUNCTIONALITY =====
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const hiddenItems = document.querySelectorAll(".gallery-item.hidden");

  let itemsToShow = 4;
  let currentIndex = 0;

  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
      for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
        if (hiddenItems[i]) {
          hiddenItems[i].classList.remove("hidden");
          hiddenItems[i].classList.add("show");
        }
      }

      currentIndex += itemsToShow;

      if (currentIndex >= hiddenItems.length) {
        seeMoreBtn.style.display = "none";
      }
    });
  }
})();
