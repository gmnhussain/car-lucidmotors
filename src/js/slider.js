const instagramSlider = new Swiper(".home_instagram_slider", {
  loop: true,
  // observer: true,
  // observeParents: true,
  slidesPerView: 2,
  breakpoints: {
    440: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    840: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
    1800: {
      slidesPerView: 6,
    },
  },
});

// blog list slider
const blogListSlider = new Swiper(".home_blog_list_slider", {
  loop: true,
  // observer: true,
  // observeParents: true,
  slidesPerView: 3,
});
