"use strict";
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnShowModel = document.querySelectorAll(".show-modal");

function hide() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}
function show() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener("click", show);
}

btnCloseModel.addEventListener("click", hide);
overlay.addEventListener("click", hide);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !model.classList.contains("hidden")) hide();
});
