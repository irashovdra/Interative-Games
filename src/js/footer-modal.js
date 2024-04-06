const footerBtn = document.querySelector(".footer__btn");
const footerModal = document.querySelector(".footer-modal");

footerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  footerModal.classList.remove("hidden");
});

const footerModalClose = document.querySelector(".footer-modal__close");
footerModalClose.addEventListener("click", () => {
  // event.preventDefault();
  footerModal.classList.add("hidden");
});
