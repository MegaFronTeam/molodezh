"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var inputRegion = document.getElementById("region"); // Выбор пунков списка

  if (document.querySelector(".js-select-btn")) {
    var choicePoints = function choicePoints(el) {
      el = el.target; // Открытие списка

      if (el.closest(".js-select-btn")) {
        el.closest(".js-select-btn").classList.toggle("active");
      } // Удаление активного класса у выбранного пункта из списка


      if (el.closest(".js-select-list")) {
        var allEl = el.closest(".js-select-list").querySelectorAll(".js-select-item");
        allEl.forEach(function (listItem) {
          listItem.classList.remove("active");
        });
      } // Подстановка выбранного пункта


      if (el.classList.contains("js-select-item")) {
        inputRegion.value = el.dataset.region;
        el.closest(".js-select-btn").querySelector(".js-select-input").value = el.textContent;
        el.classList.add("active");
      } // Закрытие списка


      if (!el.closest(".js-select-btn")) {
        document.querySelectorAll(".js-select-btn").forEach(function (el) {
          el.classList.remove("active");
        });
      }
    };

    document.addEventListener("click", choicePoints);
  }
});
//# sourceMappingURL=search-results.js.map
