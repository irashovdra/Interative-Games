const birthdayInput = document.querySelector(".birthday__input");
const birthdayResult = document.querySelector(".birthday__text");
const birthdayBtn = document.querySelector(".birthday__btn");

birthdayBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const birthdayYear = parseInt(birthdayInput.value);
  birthdayResult.style.opacity = 1;
  birthdayInput.value = "";

  if (birthdayInput.value === "") {
    birthdayResult.textContent = "Введіть число!";
    birthdayResult.style.color = "#900";
  } else if (
    birthdayYear % 4 === 0 &&
    (birthdayYear % 100 !== 0 || birthdayYear % 400 === 0)
  ) {
    birthdayResult.textContent = "Ви народилися у високосний рік!";
    birthdayResult.style.color = "";
  } else {
    birthdayResult.textContent = "Ви народилися не у високосний рік!";
    birthdayResult.style.color = "#900";
  }
});
