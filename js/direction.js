"use strict";

document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {});

  var swiperNews = new Swiper(".swiper-vacancy", {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 35
      },
    },
    navigation: {
      nextEl: ".swiper-buttons__next",
      prevEl: ".swiper-buttons__prev"
    },
  }); // Слайдер ключевые проекты
});
//# sourceMappingURL=contacts.js.map
