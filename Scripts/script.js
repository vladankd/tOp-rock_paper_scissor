// ===========================================
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Rock paper scissor -- No GUI
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ===========================================

// Random number helper function

function randomNum(n) {
  return Math.floor(Math.random() * 3);
}

// create player Option

function playerOption() {
  let option = "";
  while (
    option !== "rock" &&
    option !== "paper" &&
    option !== "scissor" &&
    option !== null
  ) {
    option = prompt("Chose 'Rock', 'Paper' or 'Scissor': ");
  }
  if (!option) {
    return "Execution canceled";
    // how to exit game completely here ?
  }
  return option;
}

// create computer option

function computerOption() {
  const optionsArray = ["Rock", "Paper", "Scissor"];
  return optionsArray[randomNum(optionsArray.length)];
}

// compare options

function decideWinner(player, computer) {
  // Make inputs case insensitive by lowercasing them
  let playerOption = player.toLowerCase();
  let computerOption = computer.toLowerCase();

  // Decide who won the round returns -1 if tie, returns 0 if computer won and returns 1 if player won
  if (playerOption === computerOption) {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log("tie");
    return -1;
  } else if (playerOption === "rock" && computerOption === "scissor") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
    return 1;
  } else if (playerOption === "paper" && computerOption === "rock") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
    return 1;
  } else if (playerOption === "scissor" && computerOption === "paper") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
    return 1;
  } else {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} loses to ${computerOption}, computer won`);
    return 0;
  }
}

// Game plays form this funciton, here the winner of the game is decided by the score. Does not return anything.
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winCondition = 5;

  // Plays rounds and records the score until win condition is met
  while (playerScore < winCondition && computerScore < winCondition) {
    let gameResult = decideWinner(playerOption(), computerOption());
    if (gameResult === 1) {
      playerScore++;
      console.log(`playerScore = ${playerScore}`);
    } else if (gameResult === 0) {
      computerScore++;
      console.log(`computerScore = ${computerScore}`);
    }
  }

  // anounces the winner
  playerScore === winCondition
    ? console.log("Congratulations, YOU WON!!!")
    : console.log("Sorry, YOU LOST");
}

// Function calls
// console.log(playerOption());
// console.log(computerOption());
// decideWinner(playerOption(), computerOption());
game();
