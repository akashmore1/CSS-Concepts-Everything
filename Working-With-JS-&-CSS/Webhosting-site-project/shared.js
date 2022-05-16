"use strict";

const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const buttons = document.querySelectorAll(".plan button");
const noButton = document.querySelector(".modal__action--negative");

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
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClickHandler);
}

noButton.addEventListener("click", noButtonClickHandler);

backdrop.addEventListener("click", backdropClickHandler);
