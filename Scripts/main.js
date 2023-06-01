// ===========================================
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Rock paper scissor -- GUI version
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ===========================================
const startBtn = document.querySelector("#start_game_btn");
startBtn.addEventListener("click", startGame);

const gameWinner = document.querySelector(".game_winner");
// gameWinner.classList.remove("hidden");
// Score tracking
let playerScore = 0;
let computerScore = 0;
let winCondition = 3;
let roundsPlayed = 0;

// Helper variables to remove previous option selected class
let selectedOptionPlayer = null;
let selectedOptionComputer = null;

// Set the player  option
function playerOption(option) {
  document.querySelector(`#player_cards .${option}`).classList.add("selected");
  return option;
}

// Random number helper function
function randomNum(n) {
  return Math.floor(Math.random() * 3);
}

// create computer option
function computerOption() {
  const optionsArray = ["rock", "paper", "scissor"];
  let option = optionsArray[randomNum(optionsArray.length)];
  document
    .querySelector(`#computer_cards .${option}`)
    .classList.add("selected");
  selectedOptionComputer = document.querySelector(`#computer_cards .${option}`);
  return option;
}

// compare options
function playRound(player, computer) {
  // Create choosen options
  // just so I dont need to chanage code everywhere
  let playerOption = player;
  let computerOption = computer;

  let roundWinner = document.querySelector(".round_winner");

  // Decide who won the round returns -1 if tie, returns 0 if computer won and returns 1 if player won
  if (playerOption === computerOption) {
    // console.log(`Player has choosen: ${playerOption}`);
    // console.log(`Computer has choosen: ${computerOption}`);
    // console.log("tie");
    roundWinner.innerText = "Tie";
    roundWinner.classList.remove("hidden");
    return -1;
  } else if (playerOption === "rock" && computerOption === "scissor") {
    // console.log(`Player has choosen: ${playerOption}`);
    // console.log(`Computer has choosen: ${computerOption}`);
    // console.log(`${playerOption} beats ${computerOption}, player won`);
    roundWinner.innerText = "Player WON!";
    roundWinner.classList.remove("hidden");
    return 1;
  } else if (playerOption === "paper" && computerOption === "rock") {
    // console.log(`Player has choosen: ${playerOption}`);
    // console.log(`Computer has choosen: ${computerOption}`);
    // console.log(`${playerOption} beats ${computerOption}, player won`);
    roundWinner.innerText = "Player WON!";
    roundWinner.classList.remove("hidden");
    return 1;
  } else if (playerOption === "scissor" && computerOption === "paper") {
    // console.log(`Player has choosen: ${playerOption}`);
    // console.log(`Computer has choosen: ${computerOption}`);
    // console.log(`${playerOption} beats ${computerOption}, player won`);
    roundWinner.innerText = "Player WON!";
    roundWinner.classList.remove("hidden");
    return 1;
  } else {
    // console.log(`Player has choosen: ${playerOption}`);
    // console.log(`Computer has choosen: ${computerOption}`);
    // console.log(`${playerOption} loses to ${computerOption}, computer won`);
    roundWinner.innerText = "You LOST!";
    roundWinner.classList.remove("hidden");
    return 0;
  }
}

function startGame() {
  // DOM selectors
  const gameDescriptionText = document.querySelector(".game_description_text");
  const options = document.querySelectorAll("#player_cards .option");
  const numberOfRounds = document.querySelector(".round_playing");
  const scoreOfPlayer = document.querySelector(".player_score");
  const scoreOfComputer = document.querySelector(".computer_score");

  // Score tracking
  playerScore = 0;
  computerScore = 0;
  winCondition = 3;
  roundsPlayed = 0;

  // Reset score when start is pressed
  scoreOfPlayer.innerText = playerScore;
  scoreOfComputer.innerText = computerScore;
  numberOfRounds.innerText = roundsPlayed;

  gameWinner.classList.add("hidden");

  gameDescriptionText.innerText = "Chose the option";

  // remove selected clas from options when game restarts
  if (selectedOptionPlayer) {
    selectedOptionPlayer.classList.remove("selected");
    selectedOptionComputer.classList.remove("selected");
  }

  options.forEach((option) =>
    option.addEventListener("click", optioneventHandler)
  );

  function optioneventHandler(e) {
    // Check for selected element from previous round and remove "sleected" class

    if (selectedOptionPlayer) {
      selectedOptionPlayer.classList.remove("selected");
      selectedOptionComputer.classList.remove("selected");
    }
    // Play one round
    let gameResult = playRound(
      playerOption(e.currentTarget.classList[1]),
      computerOption()
    );
    roundsPlayed++;
    numberOfRounds.innerText = roundsPlayed;
    if (gameResult === 1) {
      playerScore++;
      scoreOfPlayer.innerText = playerScore;
      scoreOfComputer.innerText = computerScore;
      // console.log(`playerScore = ${playerScore}`);
    } else if (gameResult === 0) {
      computerScore++;
      scoreOfPlayer.innerText = playerScore;
      scoreOfComputer.innerText = computerScore;
      // console.log(`computerScore = ${computerScore}`);
    }
    // Helper variable to remove selected class form the previously selected element
    selectedOptionPlayer = e.currentTarget;

    // Condition to end the game
    if (playerScore === winCondition) {
      console.log(gameWinner);
      gameWinner.innerText = "PLAYER WON!!!";
      gameWinner.classList.remove("hidden");
      // Remove event listener on options to stop the game
      options.forEach((option) =>
        option.removeEventListener("click", optioneventHandler)
      );
      gameDescriptionText.innerText = "Press START to play again";
    } else if (computerScore === winCondition) {
      console.log(gameWinner);
      gameWinner.innerText = "COMPUTER WON!!!";
      gameWinner.classList.remove("hidden");
      options.forEach((option) =>
        option.removeEventListener("click", optioneventHandler)
      );
      gameDescriptionText.innerText = "Press START to play again";
    }
  }
}
