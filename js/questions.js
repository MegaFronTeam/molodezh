"use strict";
document.addEventListener("DOMContentLoaded", () => {
  function questionsFilter() {
    const filterBtn = document.querySelector('.btn--filter');
    const answersList = document.querySelector('.answers__list');
    const answersBtn = document.querySelectorAll('.answers__list-btn');
    answersBtn.forEach(function(item) {
      item.addEventListener('click', () => {
        answersList.classList.remove('active');
      })
    })

    filterBtn.addEventListener("click", () => {
        answersList.classList.toggle('active');
    })
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('answers__list') && !e.target.closest('.answers__list') && !e.target.classList.contains('btn--filter')) {
        answersList.classList.remove('active');
      }
    });
  }
  questionsFilter();
});