let computerScore = 0;
let playerScore = 0;
const buttons = document.getElementsByClassName("button");
let result = document.getElementsByName("results");
let scoreBoard = document.getElementsByName("scoreboard");
let gameOver = document.getElementsByName("gameover");
const rock = document.getElementsByClassName("rock");
const paper = document.getElementsByClassName("paper");
const scissors = document.getElementsByClassName("scissors");

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
    playerScore += 1;
    result.innerHTML =
      "Player Won!" + playerSelection + "beat" + computerSelection;
    scoreBoard.innerHTML =
      "Player Score:" + playerScore + "Computer Score:" + computerScore;
    if (playerScore === 5) {
      gameOver.innerHTML = "Game Over! You won the game!";
    } else if (playerSelection === computerSelection) {
      result.innerHTML = "It's a tie!";
      scoreBoard.innerHTML =
        "Player Score:" + playerScore + "Computer Score:" + computerScore;
    } else {
      computerScore += 1;
      result.innerHTML =
        "Computer Won!" + computerSelection + "beat" + playerSelection;
      scoreBoard.innerHTML =
        "Player Score:" + playerScore + "Computer Score:" + computerScore;

      if (computerScore === 5) {
        gameOver.innerHTML = "Game Over! You lost the game!";
      }
    }
  }
}
buttons[0].addEventListener("click", playRound);
buttons[1].addEventListener("click", playRound);
buttons[2].addEventListener("click", playRound);
