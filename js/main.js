"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // навигация слева на сайте
  function navPage() {
    var nav = document.querySelector(".nav-page");

    if (nav) {
      var accordions = document.querySelectorAll(".nav-page__item");
      accordions.forEach(function (el) {
        el.addEventListener("click", function (e) {
          var self = e.currentTarget;
          var control = self.querySelector(".nav-page__button");
          var content = self.querySelector(".list-reset");
          self.classList.toggle("active");

          if (self.classList.contains("active")) {
            control.setAttribute("aria-expanded", true);
            content.setAttribute("aria-hidden", false);
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            control.setAttribute("aria-expanded", false);
            content.setAttribute("aria-hidden", true);
            content.style.maxHeight = null;
          }
        });
      });
    }
  }

  navPage(); // Открытие мобильного меню

  var openingMobileMenu = function openingMobileMenu(el) {
    el = el.target; // burger menu

    if (el.closest(".nav__burger")) {
      document.querySelector(".nav__burger").classList.toggle("active");
      document.body.classList.toggle("no-scroll");
      document.querySelector(".header__wrapper").classList.toggle("active");

      if (document.querySelector(".hero")) {
        document.querySelector(".hero").classList.toggle("active");
      }
    }
  }; // Раскрытие пунктов мобильного меню

  var openingMobilePointer = function openingMobilePointer(el) {
    el = el.target;

    if (el.closest(".header-mobile-item") && !el.closest(".header-mobile-item.active")) {
      document.querySelectorAll(".header-mobile-item").forEach(function (el) {
        el.classList.remove("active");
      });
      el.closest(".header-mobile-item").classList.add("active");
    } else if (el.closest(".header-mobile-item") && !el.closest(".header-mobile-list")) {
      el.closest(".header-mobile-item").classList.remove("active");
    }

    if (!el.closest(".header-mobile-item")) {
      document.querySelectorAll(".header-mobile-item").forEach(function (el) {
        el.classList.remove("active");
      });
    }
  }; // Вызов функций моб меню

  if (window.screen.width < 1200) {
    document.addEventListener("click", openingMobileMenu);
    document.addEventListener("click", openingMobilePointer);
  } // обработка действия элементов меню

  var handleMenuActive = function handleMenuActive(el) {
    el = el.target;

    if (el.closest(".js-menu")) {
      document.querySelectorAll(".js-menu").forEach(function (el) {
        el.classList.remove("active");
      });
      el.closest(".js-menu").classList.toggle("active");
    }

    if (!el.closest(".js-menu")) {
      document.querySelectorAll(".js-menu").forEach(function (el) {
        el.classList.remove("active");
      });
    }
  };

  document.addEventListener("click", handleMenuActive);

  if (document.querySelector(".committees")) {
    var commitessTabs = function commitessTabs() {
      var tabsBtn = document.querySelectorAll(".committees__btn");
      var tabsItems = document.querySelectorAll(".committees__item");
      tabsBtn.forEach(function (item) {
        item.addEventListener("click", function () {
          var currentBtn = item;
          var tabId = currentBtn.getAttribute("data-tab");
          var currentTab = document.querySelector(tabId);

          if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
              item.classList.remove("active");
            });
            currentBtn.classList.add("active");
            tabsItems.forEach(function (item) {
              item.classList.remove("active");
            });
            currentTab.classList.add("active");
          }
        });
      });
    };

    commitessTabs();
  }

  // Открытие модального окна с фильтр по регионам
  const filterSelection = () => {
    const openbBtn = document.querySelector(".js-filter-settings");
    const blockModal = document.querySelector(".js-block-modal");
    const iconCloses = document.querySelectorAll(".js-close");
    const overlay = document.querySelector(".overlay");

    openbBtn.addEventListener("click", (evt) => {
      blockModal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
      evt.preventDefault();
    });

    iconCloses.forEach((iconClose) => {
      iconClose.addEventListener("click", (evt) => {
        evt.preventDefault();
        blockModal.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
      });
    });

    overlay.addEventListener("click", (evt) => {
      evt.preventDefault();
      blockModal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });

    if (window.screen.width > 767) {
      document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
          evt.preventDefault();
          blockModal.classList.remove("active");
          overlay.classList.remove("active");
          document.body.classList.remove("no-scroll");
        }
      });
    }
  };
  filterSelection();

  // Смена фильтров в модальном окне
  const changingFilters = () => {
    const btnRegion = document.querySelector(".js-btn-region");
    const btnTrack = document.querySelector(".js-btn-track");

    const track = document.querySelector(".js-track");
    const region = document.querySelector(".js-region");

    btnRegion.addEventListener("click", (evt) => {
      track.classList.remove("show");
      region.classList.add("show");
    });

    btnTrack.addEventListener("click", (evt) => {
      track.classList.add("show");
      region.classList.remove("show");
    });
  };
  changingFilters();
});
