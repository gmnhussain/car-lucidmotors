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

// blog list slider
// const carSlider = new Swiper(".home_car_slider", {
//   loop: true,
//   // observer: true,
//   // observeParents: true,
//   slidesPerView: 1,
// });

// const carSlider = new Swiper(".home_car_slider", {
//   loop: true,
//   slidesPerView: 1,
//   observer: true,
//   observeParents: true,
//   parallax: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-prev",
//   },
// });

const carSlider = new Swiper(".home_car_slider", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".home_car_slider_pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".home_car_slider_btn.next",
    prevEl: ".home_car_slider_btn.prev",
  },
});
