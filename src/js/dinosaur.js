const dino = document.getElementById("dino");
const cactus = document.querySelector(".cactus");
let isGameStarted = false;
let isCactusMoving = false;
let cactusInterval;
const gameOver = document.querySelector(".game-over");
const gameOverBtn = document.querySelector(".game-over__btn");
const dinoCount = document.querySelector(".dino-count");
let fails = 0;
dinoCount.textContent = fails;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

function startGame() {
  if (!isGameStarted) {
    isGameStarted = true;
    isCactusMoving = true;
    cactusInterval = setInterval(moveCactus, 10);
  }
  cactus.classList.add("cactus-animation");
}

function moveCactus() {
  if (isCactusMoving) {
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
    cactus.style.left = cactusLeft - 1 + "px"; // Змінено швидкість руху на 1px на кожному кадрі
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      clearInterval(cactusInterval); // Зупиняємо рух кактуса
      isCactusMoving = false;
      gameOver.classList.remove("game-over-hidden");
      isGameStarted = false; // Позначаємо гру як завершену
    }
  }
  if (isGameStarted === false) {
    cactus.classList.remove("cactus-animation");
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    startGame();
  }
  jump();
});

// Додали обробник подій для кнопки "ОК" у вікні alert
window.addEventListener("load", function () {
  let alertBox = document.querySelector(".alert");
  if (alertBox) {
    alertBox.addEventListener("click", function () {
      if (!isGameStarted) {
        location.reload();
      }
    });
  }
});

gameOverBtn.addEventListener("click", () => {
  gameOver.classList.toggle("game-over-hidden");
  fails++;
  dinoCount.textContent = fails;
});
