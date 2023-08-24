"use strict";

document.addEventListener("DOMContentLoaded", function () {
	let toggleMenu = document.querySelectorAll(".btn-reset--js");
	for (const item of toggleMenu) {
		item.addEventListener("click", function (e) {
			item.nextElementSibling.classList.toggle("active");
		})
	}
})