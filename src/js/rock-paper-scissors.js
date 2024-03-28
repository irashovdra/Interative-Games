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

let playerResult = 0;
let computerResult = 0;

function updateScore() {
  playerResultText.textContent = `Ви: ${playerResult}`;
  computerResultText.textContent = `Комп'ютер: ${computerResult}`;
}

function computerMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

function playRound(playerChoice) {
  const computerChoice = computerMove();
  rockPaperScissorsMessage.style.opacity = "1";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerResult++;
    rockPaperScissorsMessage.textContent = "Ви виграли раунд!";
  } else if (playerChoice !== computerChoice) {
    computerResult++;
    rockPaperScissorsMessage.textContent = "Комп’ютер виграв раунд!";
    rockPaperScissorsMessage.style.color = "#900";
  } else {
    rockPaperScissorsMessage.textContent = "Раунд закінчився внічию!";
  }

  updateScore();
}
