"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////

// Selecting Eleent
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
const header = document.querySelector(".header");
// console.log(document.querySelectorAll(".section"));
// console.log(document.getElementById("section--1"));
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);
// console.log(document.getElementsByClassName("btn"));

/*
// Creating and Inserting elements
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class = 'btn btn--close--cookie'>Got it!</button>";
// header.prepend(message);
header.append(message);

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Atribute

const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);
logo.alt = "Beautifull Minimilist Logo";
logo.setAttribute("Comapny", "Bankist");
console.log(logo.src);
console.log(logo.getAttribute("src"));

*/
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
btnScrollTo.addEventListener("click", function (e) {
  const s1Cords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  // window.scrollTo(
  //   s1Cords.left + window.pageXOffset,
  //   s1Cords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1Cords.left + window.pageXOffset,
  //   top: s1Cords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});
