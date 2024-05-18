const guessNumberBtn = document.querySelector(".guess-number__btn");
const guessNumberResult = document.querySelector(".guess-number__result");
const guessNumberInput = document.querySelector(".guess-number__input");

guessNumberBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const computerNumber = Math.round(Math.random() * (10 - 1) + 1);
  console.log(computerNumber);

  const personNumber = guessNumberInput.value;
  guessNumberResult.style.opacity = 1;

  if (!personNumber) {
    guessNumberResult.textContent = "Введіть число";
    guessNumberResult.style.color = "#900";
  } else {
    const personNumberParsed = Number(personNumber);
    if (computerNumber === personNumberParsed) {
      guessNumberResult.textContent = `Вітаю, ви вгадали число! ${computerNumber}`;
      guessNumberResult.style.color = "";
    } else {
      guessNumberResult.textContent = `Ви програли, комп’ютер загадав ${computerNumber}`;
      guessNumberResult.style.color = "#900";
    }
  }

  guessNumberInput.value = "";
});
