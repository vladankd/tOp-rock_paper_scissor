// ===========================================
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Rock paper scissor -- GUI version
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ===========================================
const startBtn = document.querySelector("#start_game_btn");
startBtn.addEventListener("click", startGame);

// // DOM selectors
// let options = document.querySelectorAll("#player_cards .option");
// let numberOfRounds = document.querySelector(".round_playing");
// let scoreOfPlayer = document.querySelector(".player_score");
// let scoreOfComputer = document.querySelector(".computer_score");

// Helper variables to remove previous option selected class
let selectedOptionPlayer = null;
let selectedOptionComputer = null;

// // Score tracking
// let playerScore = 0;
// let computerScore = 0;
// let winCondition = 5;
// let roundsPlayed = 0;

// options.forEach((option) =>
//   option.addEventListener("click", (e) => {
//     // Check for selected element from previous round and remove "sleected" class
//     if (selectedOptionPlayer) {
//       selectedOptionPlayer.classList.remove("selected");
//       selectedOptionComputer.classList.remove("selected");
//     }

//     let gameResult = playRound(
//       playerOption(e.currentTarget.classList[1]),
//       computerOption()
//     );
//     roundsPlayed++;
//     numberOfRounds.innerText = roundsPlayed;
//     if (gameResult === 1) {
//       playerScore++;
//       scoreOfPlayer.innerText = playerScore;
//       scoreOfComputer.innerText = computerScore;
//       console.log(`playerScore = ${playerScore}`);
//     } else if (gameResult === 0) {
//       computerScore++;
//       scoreOfPlayer.innerText = playerScore;
//       scoreOfComputer.innerText = computerScore;
//       console.log(`computerScore = ${computerScore}`);
//     }

//     // Helper variable to remove selected class form the previously selected element
//     selectedOptionPlayer = e.currentTarget;
//   })
// );

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
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log("tie");
    roundWinner.innerText = "Tie";
    roundWinner.classList.remove("hidden");
    return -1;
  } else if (playerOption === "rock" && computerOption === "scissor") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
    roundWinner.innerText = "Player WON!";
    roundWinner.classList.remove("hidden");
    return 1;
  } else if (playerOption === "paper" && computerOption === "rock") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
    roundWinner.innerText = "Player WON!";
    roundWinner.classList.remove("hidden");
    return 1;
  } else if (playerOption === "scissor" && computerOption === "paper") {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} beats ${computerOption}, player won`);
    roundWinner.innerText = "Player WON!";
    roundWinner.classList.remove("hidden");
    return 1;
  } else {
    console.log(`Player has choosen: ${playerOption}`);
    console.log(`Computer has choosen: ${computerOption}`);
    console.log(`${playerOption} loses to ${computerOption}, computer won`);
    roundWinner.innerText = "You LOST!";
    roundWinner.classList.remove("hidden");
    return 0;
  }
}

function startGame() {
  // DOM selectors
  let options = document.querySelectorAll("#player_cards .option");
  let numberOfRounds = document.querySelector(".round_playing");
  let scoreOfPlayer = document.querySelector(".player_score");
  let scoreOfComputer = document.querySelector(".computer_score");

  // Score tracking
  let playerScore = 0;
  let computerScore = 0;
  let winCondition = 5;
  let roundsPlayed = 0;

  options.forEach((option) =>
    option.addEventListener("click", (e) => {
      // Check for selected element from previous round and remove "sleected" class
      if (selectedOptionPlayer) {
        selectedOptionPlayer.classList.remove("selected");
        selectedOptionComputer.classList.remove("selected");
      }

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
        console.log(`playerScore = ${playerScore}`);
      } else if (gameResult === 0) {
        computerScore++;
        scoreOfPlayer.innerText = playerScore;
        scoreOfComputer.innerText = computerScore;
        console.log(`computerScore = ${computerScore}`);
      }

      if (roundsPlayed === 3) {
        console.log(roundsPlayed);

        // quit program here
      }
      // Helper variable to remove selected class form the previously selected element
      selectedOptionPlayer = e.currentTarget;
    })
  );

  function optioneventHandler(e) {}
}

// Game plays form this funciton, here the winner of the game is decided by the score. Does not return anything.
// function game(option) {
//   // Score tracking
//   let playerScore = 0;
//   let computerScore = 0;
//   let winCondition = 5;
//   let roundsPlayed = 0;

//   // DOM manipulation

//   let numberOfRounds = document.querySelector(".round_playing");
//   let scoreOfPlayer = document.querySelector(".player_score");
//   let scoreOfComputer = document.querySelector(".computer_score");

//   // Plays rounds and records the score until win condition is met
//   // while (playerScore < winCondition && computerScore < winCondition) {
//   let gameResult = playRound(playerOption(option), computerOption());
//   roundsPlayed++;
//   numberOfRounds.innerText = roundCounter;
//   if (gameResult === 1) {
//     playerScore++;
//     scoreOfPlayer.innerText = playerScore;
//     scoreOfComputer.innerText = computerScore;
//     console.log(`playerScore = ${playerScore}`);
//   } else if (gameResult === 0) {
//     computerScore++;
//     scoreOfPlayer.innerText = playerScore;
//     scoreOfComputer.innerText = computerScore;
//     console.log(`computerScore = ${computerScore}`);
//   }
//   // }

//   // anounces the winner
//   playerScore === winCondition
//     ? console.log("Congratulations, YOU WON!!!")
//     : console.log("Sorry, YOU LOST");
//   roundsPlayed = 0;
// }
// console.log(playRound(playerOption(), computerOption()));
