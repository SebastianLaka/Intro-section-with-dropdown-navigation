"use strict";
const burgerIcon = document.querySelector(".nav__hamburger-icon");
const closeNavIcon = document.querySelector('.nav-container__close-icon')
const navContainer = document.querySelector('.nav-container')

burgerIcon.addEventListener('click', e =>{
    if(e.target.tagName === "BUTTON"){
        navContainer.classList.add('show-slider');
    }
})
