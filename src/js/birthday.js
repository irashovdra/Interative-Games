const birthdayInput = document.querySelector(".birthday__input");
const birthdayResult = document.querySelector(".birthday__text");
const birthdayBtn = document.querySelector(".birthday__btn");
// birthdayInput.addEventListener("input", (event) => {
//   const birthdayYear = event.target.value;
birthdayBtn.addEventListener("click", (event) => {
  event.preventDefault();
  birthdayResult.style.opacity = 1;
  if (
    birthdayInput.value % 4 === 0 &&
    (birthdayInput.value % 100 === !0 || birthdayInput.value % 400 === 0)
  ) {
    birthdayResult.textContent = "Ви народилися у високосний рік!";
  } else {
    birthdayResult.textContent = "Ви народилися не у високосний рік!";
    birthdayResult.style.color = "#900";
  }
});
// });
