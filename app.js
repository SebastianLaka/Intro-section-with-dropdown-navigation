"use strict";
const burgerIcon = document.querySelector(".nav__hamburger-icon");
const closeNavIcon = document.querySelector(".nav-container__close-icon");
const navContainer = document.querySelector(".nav-container");
const body = document.body;
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
