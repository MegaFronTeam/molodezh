"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // обработка аккардеона
  var toggleAccordion = function toggleAccordion(el) {
    el = el.target;

    if (el.closest(".accordion-item") && !el.closest(".accordion-item.active")) {
      document.querySelectorAll(".accordion-item").forEach(function (el) {
        el.classList.remove("active");
      });
      el.closest(".accordion-item").classList.add("active");
    } else if (el.closest(".accordion-item") && !el.closest(".management-item-wrap")) {
      el.closest(".accordion-item").classList.remove("active");
    }

    if (!el.closest(".accordion-item")) {
      document.querySelectorAll(".accordion-item").forEach(function (el) {
        el.classList.remove("active");
      });
    }

    if (el.closest(".structure__control-item") && !el.closest(".structure__control-item.active")) {
      document.querySelectorAll(".structure__control-item").forEach(function (el) {
        el.classList.remove("active");
      });
      el.closest(".structure__control-item").classList.add("active");
    } else if (el.closest(".structure__control-item") && !el.closest(".accordion-wrap")) {
      el.closest(".structure__control-item").classList.remove("active");
    }

    if (!el.closest(".structure__control-item")) {
      document.querySelectorAll(".structure__control-item").forEach(function (el) {
        el.classList.remove("active");
      });
    }
  };

  document.addEventListener("click", toggleAccordion);
});
//# sourceMappingURL=structure.js.map
