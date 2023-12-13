"use strict";

document.addEventListener("DOMContentLoaded", function () {
	let toggleMenu = document.querySelectorAll(".btn-reset--js");
	for (const item of toggleMenu) {
		item.addEventListener("click", function (e) {
			item.nextElementSibling.classList.toggle("active");
		})
	}

	new Swiper(".gal-slider--js", {
    slidesPerView: 'auto',
    spaceBetween: 32,
    speed: 300,
    loop: false,
		pagination: {
			el: ".slider .swiper-pagination",
			type: "bullets"
		}
  })
})
