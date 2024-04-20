const dino = document.querySelector(".dinosaur__img");
const cactus = document.querySelector(".dinosaur__cactus-img");
let isGameStarted = true;
let isGameEnded = false;
let dinoCounter = 0;

function gameStart() {
  isGameStarted = true;
  startCactusMovement();
}

function dinoJump() {
  dinoCounter = -90;
  dino.style.transform = `translateY(${dinoCounter}px)`;
}

function dinoDown() {
  dinoCounter = 0;
  dino.style.transform = `translateY(${dinoCounter}px)`;
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    gameStart();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    dinoJump();
  }
});

document.addEventListener("keyup", () => {
  setTimeout(dinoDown, 500);
});

//  РУХ КАКТУСА

function cactusMovement() {
  const windowWidth = window.innerWidth;
  cactus.style.transform = `translateX(${windowWidth}px)`;
}

function startCactusMovement() {
  if (isGameStarted === true) {
    setInterval(cactusMovement, 500);
  }
}

// КІНЕЦЬ ГРИ

function endGame() {
  let dinoRect = dino.getBoundingClientRect();
  let cactusRect = cactus.getBoundingClientRect();

  if (
    dinoRect.right >= cactusRect.left &&
    dinoRect.left <= cactusRect.right &&
    dinoRect.bottom >= cactusRect.top &&
    dinoRect.top <= cactusRect.bottom
  ) {
    isGameEnded = true;
    console.log("Game Over!");
  }
}

endGame();
