let computerScore = 0;
let playerScore = 0;
const buttons = document.getElementsByClassName("button");
let result = document.getElementById("results");
let scoreBoard = document.getElementById("scoreboard");
let gameOver = document.getElementById("gameover");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(event) {
  let computerSelection = getComputerChoice();
  let playerSelection = event.target.textContent.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;

    result.innerHTML =
      "Player Won! " + playerSelection + " beat " + computerSelection;
    scoreBoard.innerHTML =
      "Player Score: " + playerScore + " Computer Score: " + computerScore;
  } else if (playerSelection === computerSelection) {
    result.innerHTML = "It's a tie!";
    scoreBoard.innerHTML =
      "Player Score: " + playerScore + " Computer Score: " + computerScore;
  } else {
    computerScore++;

    result.innerHTML =
      "Computer Won! " + computerSelection + " beat " + playerSelection;
    scoreBoard.innerHTML =
      "Player Score: " + playerScore + " Computer Score: " + computerScore;
  }

  if (computerScore === 5) {
    console.log("Game Over! Computer Wins");
    gameOver.innerHTML = "Game Over! You lost the game!";
  }
  if (playerScore === 5) {
    console.log("Game Over! Player Wins");

    gameOver.innerHTML = "Game Over! You won the game!";
  }
}
buttons[0].addEventListener("click", playRound);
buttons[1].addEventListener("click", playRound);
buttons[2].addEventListener("click", playRound);
