const interactiveBtn = document.querySelector(".header__interactive-btn");
const interactiveModal = document.querySelector(".interactive-modal");
const interactiveBackdrop = document.querySelector(".backdrop");

interactiveBtn.addEventListener("click", () => {
  interactiveModal.style.display = "block";
  interactiveBackdrop.style.display = "block";
});
