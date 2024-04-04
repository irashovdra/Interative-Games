const footerBtn = document.querySelector(".footer__btn");
const footerModal = document.querySelector(".footer-modal");
footerBtn.addEventListener("click", () => {
  footerModal.style.display = "block";
});

const footerModalClose = document.querySelector(".footer-modal__close");
footerModalClose.addEventListener("click", () => {
  footerModal.style.display = "none";
});
