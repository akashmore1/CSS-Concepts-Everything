"use strict";

const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const buttons = document.querySelectorAll(".plan button");
const noButton = document.querySelector(".modal__action--negative");

const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const navItems = document.querySelectorAll(".mobile-nav__item a");

const onClickHandler = () => {
  modal.classList.remove("modal-display");
  backdrop.classList.remove("backdrop-display");
};

const noButtonClickHandler = () => {
  modal.classList.add("modal-display");
  backdrop.classList.add("backdrop-display");
};

const backdropClickHandler = () => {
  noButtonClickHandler();
  mobileNav.classList.add("mobile-nav__display");
};

const toggleButtonClickHandler = () => {
  mobileNav.classList.remove("mobile-nav__display");
  backdrop.classList.remove("backdrop-display");
};

const navItemsClickHandler = () => {
  backdrop.classList.add("backdrop-display");
  console.log("click!");
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClickHandler);
}

noButton.addEventListener("click", noButtonClickHandler);

backdrop.addEventListener("click", backdropClickHandler);

toggleButton.addEventListener("click", toggleButtonClickHandler);

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", navItemsClickHandler);
}
