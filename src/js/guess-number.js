const guessNumberBtn = document.querySelector(".guess-number__btn");
const guessNumberResult = document.querySelector(".guess-number__result");
const computerNumber = Math.round(Math.random() * (10 - 1) + 1);
console.log(computerNumber);

guessNumberBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const guessNumberInput = document.querySelector(".guess-number__input");
  const personNumber = Number(guessNumberInput.value);
  guessNumberResult.style.opacity = 1;
  if (computerNumber === personNumber) {
    guessNumberResult.textContent = `Вітаю, ви вгадали число! ${computerNumber}`;
  } else {
    guessNumberResult.textContent = `Ви програли, комп’ютер загадав ${computerNumber}`;
    guessNumberResult.style.color = "#900";
  }
});
