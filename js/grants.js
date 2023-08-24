"use strict";

// Слайдер история успеха
var swiperSuccess = new Swiper(".swiper-success", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  speed: 300,
  loop: false,
  navigation: {
    nextEl: ".success__next",
    prevEl: ".success__prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {},
    480: {},
    768: {
      slidesPerView: 2,
      spaceBetween: 26
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 62
    }
  }
});
//# sourceMappingURL=grants.js.map
