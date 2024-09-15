"use strict";
const burgerIcon = document.querySelector(".nav__hamburger-icon");
const closeNavIcon = document.querySelector(".nav-container__close-icon");
const navContainer = document.querySelector(".nav-container");
const dropdownItem = document.querySelectorAll('[data-dropdown-item]');

burgerIcon.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    navContainer.classList.remove("hide-slider");
    navContainer.classList.add("show-slider");
  }
});
closeNavIcon.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    navContainer.classList.remove("show-slider"); 
    navContainer.classList.add("hide-slider"); 
  }
});
dropdownItem.forEach(item => {
  item.addEventListener('click', e => {
 
    if (e.target.closest('li')) {
      const dropdownMenu = item.querySelector('ul');
      dropdownMenu.classList.toggle('active-dropdown');
    }
  });
});