const headerModal = document.querySelector(".header-modal");
const interactiveModal = document.querySelector(".interactive-modal");
const headerModalInput = document.querySelector(".header-modal__input");
const headerModalClose = document.querySelector(".header-modal__close");
const headerSpan = document.querySelector(".header__user");
const headerModalBtn = document.querySelector(".header-modal__btn");
const container = document.querySelector(".container");
const links = document.querySelector("a");
const headerIcon = document.querySelector(".header__icon");

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
const dino = document.getElementById("dino");
const cactus = document.querySelector(".cactus");
const dinoGame = document.querySelector(".game");

lightThemeBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#444141";
  body.classList.add("text-color");
  links.classList.add("text-color");
  links.style.color = "#fff";
  container.style.backgroundColor = "transparent";
  lightThemeBtn.style.display = "none";
  darkThemeBtn.style.display = "block";
  headerIcon.style.fill = "#fff";
  dino.style.backgroundImage = "url(./images/white-dino.webp)";
  dinoGame.classList.add("black-bg");
});
console.log(dinoGame);

darkThemeBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#ffffff";
  body.classList.remove("text-color");
  lightThemeBtn.style.display = "block";
  darkThemeBtn.style.display = "none";
  links.classList.remove("text-color");
  dino.style.backgroundImage = "url(./images/trex.png)";
  dinoGame.classList.remove("black-bg");
});
