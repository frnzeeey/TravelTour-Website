// masonry-fix.js
function resizeAllGridItems() {
  const grid = document.querySelector(".gallery-grid");
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
    const contentHeight = item.querySelector("img").getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
  });
}

window.addEventListener("load", resizeAllGridItems);
window.addEventListener("resize", resizeAllGridItems);