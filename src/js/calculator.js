const calculatorFirstInput = document.querySelector(".calculator__number1");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const calculatorSecondInput = document.querySelector(".calculator__number2");
const calculatorResultText = document.querySelector(".calculator__result");
const equal = document.querySelector(".calculator__btn");

let chosenSymbol = null;
let calculatorResult = 0;

plus.addEventListener("click", () => {
  chosenSymbol = "+";
});

minus.addEventListener("click", () => {
  chosenSymbol = "-";
});

multiply.addEventListener("click", () => {
  chosenSymbol = "*";
});

divide.addEventListener("click", () => {
  chosenSymbol = "/";
});

equal.addEventListener("click", () => {
  const calculatorFirstNumber = parseFloat(calculatorFirstInput.value);
  const calculatorSecondNumber = parseFloat(calculatorSecondInput.value);
  calculatorFirstInput.value = "";
  calculatorSecondInput.value = "";
  if (chosenSymbol === "+") {
    calculatorResult = calculatorFirstNumber + calculatorSecondNumber;
    calculatorResultText.textContent = `${calculatorResult}`;
  } else if (chosenSymbol === "-") {
    calculatorResult = calculatorFirstNumber - calculatorSecondNumber;
    calculatorResultText.textContent = `${calculatorResult}`;
  } else if (chosenSymbol === "*") {
    calculatorResult = calculatorFirstNumber * calculatorSecondNumber;
    calculatorResultText.textContent = `${calculatorResult}`;
  } else if (chosenSymbol === "/") {
    calculatorResult = calculatorFirstNumber / calculatorSecondNumber;
    calculatorResultText.textContent = `${calculatorResult}`;
  }
  calculatorResultText.style.color = "fieldtext";
});

console.log(chosenSymbol);
