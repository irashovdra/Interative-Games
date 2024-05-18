const birthdayInput = document.querySelector(".birthday__input");
const birthdayResult = document.querySelector(".birthday__text");
const birthdayBtn = document.querySelector(".birthday__btn");

birthdayBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const birthdayYear = birthdayInput.value;
  birthdayResult.style.opacity = 1;

  if (!birthdayYear) {
    birthdayResult.textContent = "Введіть число";
    birthdayResult.style.color = "#900";
  } else {
    const year = parseInt(birthdayYear);
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      birthdayResult.textContent = "Ви народилися у високосний рік!";
      birthdayResult.style.color = "";
    } else {
      birthdayResult.textContent = "Ви народилися не у високосний рік!";
      birthdayResult.style.color = "#900";
    }
  }

  birthdayInput.value = "";
});
