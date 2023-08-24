/* eslint-disable no-undef */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Слайдер с партнерами
  var swiperNews = new Swiper(".slider-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 300,
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20
      },
      480: {},
      768: {
        slidesPerView: 1.1,
        spaceBetween: 24
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1280: {
        spaceBetween: 120,
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    }
  }); // Слайдер ключевые проекты

  var swiperKey = new Swiper(".swiper-key", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    speed: 300,
    loop: false,
    navigation: {
      nextEl: ".key__next",
      prevEl: ".key__prev"
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 16
      },
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
  }); // Слайдер история успеха

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
  }); // Слайдер главный

  var swiperHero = new Swiper(".swiper-hero", {
    autoplay: {
      delay: 3000
    },
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    loop: true,
    pagination: {
      el: ".hero__pug",
      type: "bullets"
    },
    breakpoints: {
      // when window width is >= 320px
      320: {},
      480: {},
      768: {},
      1200: {}
    }
  });
});
//# sourceMappingURL=index.js.map
