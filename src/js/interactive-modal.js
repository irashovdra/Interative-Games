const interactiveBtn = document.querySelector(".header__interactive-btn");
const interactiveModal = document.querySelector(".interactive-modal");
const interactiveBackdrop = document.querySelector(".backdrop");
const birthday = document.querySelector(".birthday");
const guessNumber = document.querySelector(".guess-number");
const rockPaperScissors = document.querySelector("rock-paper-scissors");
const calculator = document.querySelector(".calculator");
const timeCalculator = document.querySelector(".time-calculator");
const dino = document.querySelector(".dinosaur");
const soccer = document.querySelector(".soccer");
const biggestNumber = document.querySelector(".biggest-number");
const team = document.querySelector(".team");
const scientists = document.querySelector(".scientists");
const interactiveBtnNumbers = document.querySelector(
  ".interactive-btn__number"
);
const interactiveBtnGames = document.querySelector(".interactive-btn__games");
const interactiveBtnNew = document.querySelector(".interactive-btn__new");

interactiveBtn.addEventListener("click", () => {
  interactiveModal.style.display = "block";
  interactiveBackdrop.style.display = "block";
});

interactiveBtnNumbers.addEventListener("click", () => {
  biggestNumber.style.display = "block";
  birthday.style.display = "block";
  guessNumber.style.display = "block";
  calculator.style.display = "block";
  timeCalculator.style.display = "block";
  rockPaperScissors.style.display = "none";
  dino.style.display = "none";
  soccer.style.display = "none";
  team.style.display = "none";
  scientists.style.display = "none";
  interactiveModal.style.display = "none";
});

interactiveBtnGames.addEventListener("click", () => {
  biggestNumber.style.display = "none";
  birthday.style.display = "none";
  guessNumber.style.display = "none";
  calculator.style.display = "none";
  timeCalculator.style.display = "none";
  rockPaperScissors.style.display = "block";
  dino.style.display = "block";
  soccer.style.display = "block";
  team.style.display = "none";
  scientists.style.display = "none";
});

interactiveBtnNew.addEventListener("click", () => {
  biggestNumber.style.display = "none";
  birthday.style.display = "none";
  guessNumber.style.display = "none";
  calculator.style.display = "none";
  timeCalculator.style.display = "none";
  rockPaperScissors.style.display = "none";
  dino.style.display = "none";
  soccer.style.display = "none";
  team.style.display = "block";
  scientists.style.display = "block";
});
