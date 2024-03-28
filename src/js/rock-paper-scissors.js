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

  let resultMessage = "";

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerResult++;
    resultMessage = "Ви виграли раунд!";
  } else if (playerChoice !== computerChoice) {
    computerResult++;
    resultMessage = "Комп’ютер виграв раунд!";
  } else {
    resultMessage = "Раунд закінчився внічию!";
  }

  rockPaperScissorsMessage.textContent = resultMessage;

  updateScore();
}
