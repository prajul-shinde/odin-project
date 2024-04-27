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

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  }

  console.log(
    `after 5 rounds score is player = ${humanScore} and computer = ${computerScore}`
  );
}

playGame();
