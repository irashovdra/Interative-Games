const dino = document.querySelector(".dinosaur__img");
const cactus = document.querySelector(".dinosaur__cactus-img");
let isGameStarted = true;
let isGameEnded = false;
let dinoCounter = 0;
let cactusCounter = 0;
cactus.style.transform = `translateX(${cactusCounter}px)`;
let dinoRect = dino.getBoundingClientRect();
let cactusRect = cactus.getBoundingClientRect();
// console.log(dinoRect);
// console.log(cactusRect);
function gameStart() {
  isGameStarted = true;
  // startCactusMovement();
  // cactusMovement();
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
  setInterval(() => {
    cactusCounter++;
    cactus.style.right = `${cactusCounter}px`;
  }, 1);
  if (detectCollision(dino, cactus)) {
    isGameEnded = true;
    alert("game over");
  }
  // Коли - 1000 запустити знову
  // Коли динозаврик внизу і кактус на його місці - game over, відслідкувати через right i dinoCounter
  console.log(cactusCounter);
}
cactusMovement();
let cactusMovementId;

function endGame() {
  isGameEnded = true;
  alert("Game Over!");
  clearInterval(cactusMovementId);
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}
