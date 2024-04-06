const footerInput = document.querySelector(".footer__input");
const footerModal = document.querySelector(".footer-modal");
const footerBtn = document.querySelector(".footer__btn");
const footerModalClose = document.querySelector(".footer-modal__close");
const footerMessage = document.querySelector(".footer__message");

console.log(footerInput.value);
let footerInputValue = "";
footerInput.addEventListener("input", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  footerInputValue = event.target.value;
  return footerInputValue;
});
footerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (footerInputValue === "") {
    footerInput.style.border = "solid 1px #e42f2f";
    footerMessage.classList.remove("hidden");
  } else {
    footerModal.classList.remove("hidden");
    footerInput.style.border = "none";
    footerInput.value = "";
    footerMessage.classList.add("hidden");
  }
});

footerModalClose.addEventListener("click", () => {
  // event.preventDefault();
  footerModal.classList.add("hidden");
});
