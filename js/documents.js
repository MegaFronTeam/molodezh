"use strict";
document.addEventListener("DOMContentLoaded", () => {
  function typeFilter() {
    const typeBtn = document.querySelector(".btn--filter");
    const typyFilter = document.querySelector(".types");
    const typeBtns = document.querySelectorAll(".btn-reset");
    typeBtns.forEach(function (item) {
      item.addEventListener("click", () => {
        typyFilter.classList.remove("active");
      });
    });

    typeBtn.addEventListener("click", () => {
      typyFilter.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("types") &&
        !e.target.closest(".types") &&
        !e.target.classList.contains("btn--filter")
      ) {
        typyFilter.classList.remove("active");
      }
    });
  }
  typeFilter();

  function categoryFilter() {
    const categoryBtn = document.querySelector(".documents-category");
    const category = document.querySelector(".documents-categories");
    const categoryBtns = document.querySelectorAll(".btn-reset");
    if (categoryBtns && category) {
      categoryBtns.forEach(function (item) {
        item.addEventListener("click", () => {
          category.classList.remove("active");
        });
      });

      categoryBtn.addEventListener("click", () => {
        category.classList.toggle("active");
      });
      document.addEventListener("click", (e) => {
        if (
          !e.target.classList.contains("documents-categories") &&
          !e.target.closest(".documents-categories") &&
          !e.target.classList.contains("documents-category")
        ) {
          category.classList.remove("active");
        }
      });
    }
  }
  categoryFilter();

  var periodDateInput = document.querySelector("#period-date");
  var filterForm = document.getElementById("filter-date");
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
      } else if ((date.formattedDate.length = 1)) {
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
    },
  });
});
