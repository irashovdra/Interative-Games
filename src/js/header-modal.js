const headerModal = document.querySelector(".header-modal");
const interactiveModal = document.querySelector(".interactive-modal");
const headerModalInput = document.querySelector(".header-modal__input");
const headerModalClose = document.querySelector(".header-modal__close");
const headerSpan = document.querySelector(".header__user");
const headerModalBtn = document.querySelector(".header-modal__btn");

headerModalClose.addEventListener("click", () => {
  headerModal.style.display = "none";
});

headerModalBtn.addEventListener("click", () => {
  const headerUser = headerModalInput.value;
  headerSpan.textContent = `${headerUser}`;
  headerModal.style.display = "none";
});
