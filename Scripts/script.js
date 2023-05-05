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
  let playerOption = player.toLowerCase();
  let computerOption = computer.toLowerCase();

  if (playerOption === computerOption) {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log("tie");
  } else if (playerOption === "rock" && computerOption === "scissor") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
  } else if (playerOption === "paper" && computerOption === "rock") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
  } else if (playerOption === "scissor" && computerOption === "paper") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
  } else {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} loses to ${computerOption}, computer won`);
  }
}

// Function calls
// console.log(playerOption());
// console.log(computerOption());
decideWinner(playerOption(), computerOption());
