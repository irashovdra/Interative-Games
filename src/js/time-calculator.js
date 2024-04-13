const timeInput = document.querySelector(".time-calculator__input");
const timeBtn = document.querySelector(".time-calculator__btn");
let timeCalculatorResultText = document.querySelector(
  ".time-calculator__result"
);
let timeCalculatorResult = 0;

timeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const minutes = parseFloat(timeInput.value);
  timeInput.value = "";

  if (!isNaN(minutes)) {
    timeCalculatorResult = Math.round(minutes / 60);
    timeCalculatorResultText.textContent = `${timeCalculatorResult} годин`;
  } else {
    timeCalculatorResultText.textContent = "Будь ласка, введіть дійсне число.";
  }
});
