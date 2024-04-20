const headerModal = document.querySelector(".header-modal");
const interactiveModal = document.querySelector(".interactive-modal");
const headerModalInput = document.querySelector(".header-modal__input");
const headerModalClose = document.querySelector(".header-modal__close");
const headerSpan = document.querySelector(".header__user");
const headerModalBtn = document.querySelector(".header-modal__btn");

headerModalClose.addEventListener("click", () => {
  headerModal.style.display = "none";
});

headerModalBtn.addEventListener("click", () => {
  const headerUser = headerModalInput.value;
  headerSpan.textContent = `${headerUser}`;
  headerModal.style.display = "none";
});

// DARK THEME

const lightThemeBtn = document.querySelector(".header__light-btn");
const darkThemeBtn = document.querySelector(".header__dark-btn");
const body = document.querySelector("body");

lightThemeBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#444141";
  lightThemeBtn.style.display = "none";
  darkThemeBtn.style.display = "block";
});

darkThemeBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#ffffff";
  lightThemeBtn.style.display = "block";
  darkThemeBtn.style.display = "none";
});
