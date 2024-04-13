const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rockPaperScissorsMessage = document.querySelector(
  ".rock-paper-scissors__text"
);
const playerResultText = document.querySelector(".rock-paper-scissors__player");
const computerResultText = document.querySelector(
  ".rock-paper-scissors__computer"
);
const computerButton = document.querySelector(".rock-paper-scissors__btn");

let playerResult = 0;
let computerResult = 0;
let userChoice = null;

function updateScore() {
  playerResultText.textContent = `Ви: ${playerResult}`;
  computerResultText.textContent = `Комп'ютер: ${computerResult}`;
}

function computerMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerChoice, computerChoice) {
  rockPaperScissorsMessage.style.opacity = "1";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerResult++;
    rockPaperScissorsMessage.textContent = "Ви виграли раунд!";
    rockPaperScissorsMessage.style.color = "#039900";
  } else if (playerChoice !== computerChoice) {
    computerResult++;
    rockPaperScissorsMessage.textContent = "Комп’ютер виграв раунд!";
    rockPaperScissorsMessage.style.color = "#900";
  } else {
    rockPaperScissorsMessage.textContent = "Раунд закінчився внічию!";
  }

  updateScore();
}

rock.addEventListener("click", () => {
  userChoice = "rock";
});

paper.addEventListener("click", () => {
  userChoice = "paper";
});

scissors.addEventListener("click", () => {
  userChoice = "scissors";
});

computerButton.addEventListener("click", () => {
  if (userChoice) {
    const computerChoice = computerMove();
    playRound(userChoice, computerChoice);
    userChoice = null; // Reset user choice after the round
  } else {
    alert("Будь ласка, спочатку виберіть елемент.");
  }
});
