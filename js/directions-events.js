"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var inputRegion = document.getElementById("region");
  var regionReset = document.querySelector(".js-close");
  var periodDateInput = document.querySelector("#period-date");
  var filterForm = document.getElementById("filter-events");
  var dateFrom = document.querySelector("input[name='date_from'");
  var dateTo = document.querySelector("input[name='date_to'"); // Инпут выбора даты

  new AirDatepicker(periodDateInput, {
    range: true,
    multipleDatesSeparator: " - ",
    buttons: ["clear"],
    onSelect: function onSelect(date) {
      if (date.formattedDate.length > 1) {
        dateFrom.value = date.formattedDate[0];
        dateTo.value = date.formattedDate[1];
      } else if (date.formattedDate.length = 1) {
        dateFrom.value = date.formattedDate[0];
        dateTo.value = date.formattedDate[0];
      }
    },
    onHide: function onHide() {
      if (dateFrom.value == "undefined" && dateTo.value == "undefined") {
        dateFrom.value = "";
        dateTo.value = "";
      }

      filterForm.submit();
    }
  }); // Выбор пунков списка

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
        inputRegion.value = el.textContent;
        document.querySelector("input[name='region']").value = el.dataset.region;
        el.classList.add("active");
        filterForm.submit();
      } // Закрытие списка


      if (!el.closest(".js-select-btn")) {
        document.querySelectorAll(".js-select-btn").forEach(function (el) {
          el.classList.remove("active");
        });
      } // Добавление крестика если данные заполнены и очистка поля регион


      inputRegion.value != "" ? regionReset.classList.add("selected") : regionReset.classList.remove("selected");

      if (el.closest(".selected")) {
        document.querySelector("input[name='region']").value = "";
        regionReset.classList.remove("selected");
        filterForm.submit();
      }
    };

    document.addEventListener("click", choicePoints);
  }
});
//# sourceMappingURL=directions-events.js.map
