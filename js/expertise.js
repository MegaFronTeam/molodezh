"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Выбор пунков списка
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
      } // // Подстановка выбранного пункта


      if (el.classList.contains("js-select-item")) {
        el.closest(".js-select-btn").querySelector(".js-select-input").value = el.textContent;
        el.classList.add("active");
        document.querySelectorAll(".js-select-input").forEach(function (selectInput) {
          selectInput.dispatchEvent(new Event("input"));
        });
      } // Закрытие списка


      if (!el.closest(".js-select-btn")) {
        document.querySelectorAll(".js-select-btn").forEach(function (el) {
          el.classList.remove("active");
        });
      }
    };

    document.addEventListener("click", choicePoints);
  } // Маска телефона


  if (document.getElementById("phone-number")) {
    var phoneMask = function phoneMask() {
      var mask = function mask(input) {
        var matrix = "+7 (___) ___-__-__";
        var i = 0;
        var def = matrix.replace(/\D/g, "");
        var val = input.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        input.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
      };

      var number = document.getElementById("phone-number");
      number.addEventListener("click", function () {
        number.addEventListener("input", mask.bind(null, number), false);
        number.addEventListener("focus", mask.bind(null, number), false);
        number.addEventListener("blur", mask.bind(null, number), false);
      });
    };

    phoneMask();
  } //  Валидация и отправка формы


  var formSubmission = function formSubmission() {
    var form = document.querySelector(".js-form");
    var pristine = new Pristine(form);
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      var valid = pristine.validate();

      if (valid == true) {
        evt.target.submit();
        form.reset();
      }
    });
  };

  formSubmission(); // Показать имя загруженного файла

  if (document.querySelector(".js-file")) {
    var showDownloadFile = function showDownloadFile(inputFile) {
      document.querySelector(inputFile).addEventListener("change", function () {
        var formItem = this.parentNode; // родительский элемент, для того чтобы вставить список с файлами

        var ul = formItem.querySelector(".js-list-files");
        var str = "";
        var arrayFiles = this.files; // массив с выбранными фалами

        if (arrayFiles.length == 0) {
          ul.removeChild("li");
          str = "<li>Файл не выбран</li>";
        } else {
          for (var i = 0; i <= 3; i++) {
            if (arrayFiles[i]) {
              str += "<li>" + arrayFiles[i].name + "</li>"; // <li>Имя файла</li>
            }
          }
        }

        ul.innerHTML = str;
      });
    };

    showDownloadFile(".js-file");
  } // Ограничение по символам


  var calcCharacterLimit = function calcCharacterLimit(input, text) {
    var textArea = document.querySelector(input);
    var blockQuantity = document.querySelector(text);
    textArea.addEventListener("input", function (evt) {
      var numberCharacters = textArea.value.length;
      textArea.value = textArea.value.substr(0, 5000);
      blockQuantity.innerHTML = numberCharacters;
    });
  };

  calcCharacterLimit(".js-calc-simbol", ".input-box__quantity");
});
//# sourceMappingURL=expertise.js.map
