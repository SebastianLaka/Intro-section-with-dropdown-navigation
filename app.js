"use strict";
const burgerIcon = document.querySelector(".nav__hamburger-icon");
const closeNavIcon = document.querySelector(".nav-container__close-icon");
const navContainer = document.querySelector(".nav-container");
const dropdown = document.querySelectorAll('[data-dropdown]');

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
dropdown.forEach(item => {
  item.addEventListener('click', e => {
    const dropdownMenu = item.querySelector('ul');
    const dropdownItem = item.querySelector('[data-dropdown-item]')
    const dropdownArrowIcon = item.querySelector('[data-dropdown-arrow]')
    if (e.target.closest('li')) {
      dropdownMenu.classList.toggle('active-dropdown');
      dropdownItem.classList.toggle('change-dropdown-item-color');
      dropdownArrowIcon.classList.toggle('dropdown-rotate-arrow');
    }
  });
});