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
  // Коли - 1000 запустити знову
  // Коли динозаврик внизу і кактус на його місці - game over, відслідкувати через right i dinoCounter
  console.log(cactusCounter);
}
cactusMovement();
let cactusMovementId;

// function startCactusMovement() {
//   if (isGameStarted === true) {
//     console.log(cactusMovement());
//     cactusMovementId = setInterval(cactusMovement, 500);
//   }

//   if (dinoCounter < cactusCounter && dinoCounter < cactusCounter) {
//     endGame();
//   }

//   return cactusMovementId;
// }

// КІНЕЦЬ ГРИ

function endGame() {
  // console.log(
  //   dinoRect.right >= cactusRect.left &&
  //     dinoRect.left <= cactusRect.right &&
  //     dinoRect.bottom >= cactusRect.top &&
  //     dinoRect.top <= cactusRect.bottom
  // );
  isGameEnded = true;
  alert("Game Over!");
  clearInterval(cactusMovementId);
}
