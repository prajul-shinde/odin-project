const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`computer choice is ${choice}`);
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `tie`;
  }
  if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection == `paper` && computerSelection === `rock`) ||
    (playerSelection == `scissors` && computerSelection === `paper`)
  ) {
    humanScore++;
    return `player`;
  } else {
    computerScore++;
    return `computer`;
  }
}
function getHumanChoice() {
  let humanChoice = prompt(`Enter your choice`);
  console.log(`player choice is ${humanChoice}`);
  return humanChoice;
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "tie") {
    return "its tie";
  } else if (result === "player") {
    return `you win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `you loose ${computerSelection} beats ${playerSelection}`;
  }
}

const buttons = document.querySelectorAll(".btn");
const container = document.querySelector("#container");
const resultDiv = document.createElement("div");
resultDiv.classList.add("result");
const winnerDiv = document.createElement("div");
winnerDiv.classList.add("winner");
const runnigScoreDiv = document.createElement("div");
runnigScoreDiv.classList.add("current-score");
const runninScore = document.createElement("p");
const resultPara = document.createElement("p");
const winnerPara = document.createElement("p");
runnigScoreDiv.appendChild(runninScore);
resultDiv.appendChild(resultPara);
winnerDiv.appendChild(winnerPara);
container.appendChild(runnigScoreDiv);
container.appendChild(resultDiv);
container.appendChild(winnerDiv);

let result = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    result = playRound(button.textContent, computerSelection);
    runninScore.textContent = `you: ${humanScore} computer: ${computerScore}`;
    resultPara.textContent = result;
    if (humanScore === 5 || computerScore === 5) {
      winnerPara.textContent = `winner is ${
        humanScore > computerScore ? "player" : "computer"
      }`;
      humanScore = 0;
      computerScore = 0;
    }
  });
});
