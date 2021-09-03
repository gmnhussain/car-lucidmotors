// window load
window.addEventListener("load", onLoad);

function onLoad() {
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);
  headerBgChangeOnScroll();
}

function onResize() {
  headerBgChangeOnScroll();
}

function onScroll() {
  headerBgChangeOnScroll();
}

function headerBgChangeOnScroll() {
  let start = 0;
  let end = 500;
  let opacity = (1 / end) * window.scrollY > 1 ? 1 : (1 / end) * window.scrollY;
  if (window.scrollY > start) {
    document.querySelector(".header_bg").style.opacity = opacity;
  }
}
