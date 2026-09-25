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
  let end = 150;
  let opacity = (1 / end) * window.scrollY > 1 ? 1 : (1 / end) * window.scrollY;
  if (window.scrollY > start) {
    document.querySelector(".header_bg").style.opacity = opacity;
  }
}

// company hero section
gsap.to(".company_hero_text", {
  y: 750,
  ease: "none",
  scrollTrigger: {
    trigger: ".company_hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".company_hero_image", {
  y: 300,
  ease: "none",
  scrollTrigger: {
    trigger: ".company_hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// home vision section
// gsap.to(".home_vision_bg", {
//   y: 500,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".home_vision",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   },
// });
