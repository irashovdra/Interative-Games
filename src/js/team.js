const btnForward = document.querySelector(".slider__btn-forward");
const btnBackward = document.querySelector(".slider__btn-backward");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

const rect1 = document.querySelector(".rect1");
const rect2 = document.querySelector(".rect2");
const rect3 = document.querySelector(".rect3");
slide1.style.display = "block";

btnForward.addEventListener("click", () => {
  if (slide1.style.display === "block") {
    slide1.style.display = "none";
    slide2.style.display = "block";
    rect1.style.width = "16px";
    rect2.style.width = "30px";
    rect2.style.fill = "#797979";
    rect1.style.fill = "#D9D9D9";
  } else if (slide2.style.display === "block") {
    slide2.style.display = "none";
    slide3.style.display = "block";
    rect2.style.width = "16px";
    rect3.style.width = "30px";
    rect3.style.fill = "#797979";
    rect2.style.fill = "#D9D9D9";
  } else if (slide3.style.display === "block") {
    slide3.style.display = "none";
    slide1.style.display = "block";
    rect1.style.width = "30px";
    rect3.style.width = "16px";
    rect1.style.fill = "#797979";
    rect3.style.fill = "#D9D9D9";
  }
});

btnBackward.addEventListener("click", () => {
  if (slide1.style.display === "block") {
    slide1.style.display = "none";
    slide3.style.display = "block";
    rect1.style.width = "16px";
    rect3.style.width = "30px";
    rect3.style.fill = "#797979";
    rect1.style.fill = "#D9D9D9";
  } else if (slide3.style.display === "block") {
    slide3.style.display = "none";
    slide2.style.display = "block";
    rect2.style.width = "30px";
    rect3.style.width = "16px";
    rect2.style.fill = "#797979";
    rect3.style.fill = "#D9D9D9";
  } else if (slide2.style.display === "block") {
    slide2.style.display = "none";
    slide1.style.display = "block";
    rect1.style.width = "30px";
    rect2.style.width = "16px";
    rect1.style.fill = "#797979";
    rect2.style.fill = "#D9D9D9";
  }
});
