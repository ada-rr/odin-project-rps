console.log("Welcome to RPS on Console!");

//1. FUNCTION getComputerChoice that will RANDOMLY RETURN either "Rock", "Paper", or "Scissors"
    //Purpose: this function serve to make the computer play.
function getComputerChoice() {
    const gameChoices = ["rock", "paper", "scissors"];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
//console.log(getComputerChoice());

//2. function that plays a single round of RPS.
    //Must have 2 parameters (playerSelection, computerSelection)
    //Return a string that declares the winner of the round: "You Lose! Paper beats Rock"
    //function param playerSelection case-insensitive (so users can input rock, ROCK, RoCk, or any variation)
/*function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You won!";
    } else {
        return "You lose!";
    }
}*/

//3. return the results of this function call, not console.log() them.
    //You’re going to use what you return later on, so let’s test this function by using console.log to see the results
/*const playerSelection = prompt("Enter your selection: Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/

//4. Write a NEW function called game()
    //Call the playRound function inside of this one 
    //to play a 5 round game that keeps score 
    //and reports a winner or loser at the end.
function game() {
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
    
        if (playerSelection.toLowerCase() === computerSelection) {
            return "It's a tie!";
        } else if (
            (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
            (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
        ) {
            return "You won!";
        } else {
            return "You lose!";
        }
    }

    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your selection: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i + 1}: ${result}`);
        
        if (result === "You won!") {
            playerScore++;
          } else if (result === "You lose!") {
            computerScore++;
          } else {
            ties++;
          }
    }

    if (playerScore > computerScore) {
        return "You won the game! Congratulations! Player " + playerScore + " - Computer " + computerScore;
      } else if (computerScore > playerScore) {
        return "You lost the game. Better luck next time! Player " + playerScore + " - Computer " + computerScore;
      } else {
        return "The game was a tie. Player " + playerScore + " - Computer " + computerScore;
      }
    
}

console.log(game());