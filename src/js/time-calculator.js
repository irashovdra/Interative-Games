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
    const days = Math.floor(minutes / (60 * 24));
    const hours = Math.floor((minutes % (60 * 24)) / 60);
    const remainingMinutes = Math.floor(minutes % 60);

    timeCalculatorResultText.textContent = `${days} днів, ${hours} годин, ${remainingMinutes} хвилин`;
  } else {
    timeCalculatorResultText.textContent = "Будь ласка, введіть дійсне число.";
  }
});
