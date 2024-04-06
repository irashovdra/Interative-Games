const interactiveBtn = document.querySelector(".header__interactive-btn");
const interactiveModal = document.querySelector(".interactive-modal");
const interactiveBackdrop = document.querySelector(".backdrop");
const birthday = document.querySelector(".birthday");
const guessNumber = document.querySelector(".guess-number");
const rockPaperScissors = document.querySelector("rock-paper-scissors");


interactiveBtn.addEventListener("click", () => {
  interactiveModal.style.display = "block";
  interactiveBackdrop.style.display = "block";
});
