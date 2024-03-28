const timeInput = document.querySelector(".time-calculator__input");
const timeBtn = document.querySelector(".time-calculator__btn");
let timeCalculatorResultText = document.querySelector(
  ".time-calculator__result"
);
let timeCalculatorResult = 0;

timeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const minutes = parseFloat(timeInput.value);
  timeCalculatorResult = minutes / 60;
  timeCalculatorResultText.textContent = `${timeCalculatorResult} годин`;
});
