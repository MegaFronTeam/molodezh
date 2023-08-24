"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var tabsBtn = document.querySelectorAll(".tabs-btn");
  var tabsItems = document.querySelectorAll(".tabs-item");
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
});
//# sourceMappingURL=contacts.js.map
