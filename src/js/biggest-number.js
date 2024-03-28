const biggestNumberFirstInput = document.querySelector(".input1");
const biggestNumberSecondInput = document.querySelector(".input2");
const biggestNumberThirdInput = document.querySelector(".input3");
const biggestNumberResultText = document.querySelector(
  ".biggest-number__result"
);

function findBiggestNumber() {
  const biggestNumberFirstNumber = parseFloat(biggestNumberFirstInput.value);
  const biggestNumberSecondNumber = parseFloat(biggestNumberSecondInput.value);
  const biggestNumberThirdNumber = parseFloat(biggestNumberThirdInput.value);

  let biggestNumber = biggestNumberFirstNumber;

  if (
    biggestNumberSecondNumber > biggestNumberFirstNumber &&
    biggestNumberSecondNumber > biggestNumberThirdNumber
  ) {
    biggestNumber = biggestNumberSecondNumber;
  } else if (
    biggestNumberThirdNumber > biggestNumberFirstNumber &&
    biggestNumberThirdNumber > biggestNumberSecondNumber
  ) {
    biggestNumber = biggestNumberThirdNumber;
  }

  biggestNumberResultText.textContent = `Найбільше число, яке ви ввели - ${biggestNumber}`;
}

biggestNumberThirdInput.addEventListener("input", findBiggestNumber);
