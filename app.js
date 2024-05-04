const moves = ['rock', 'paper', 'scissors'];

// Get computer choice and return it
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * moves.length);

    return moves[computerChoice];
}

// Get user choice and return it
function getPlayerChoice() {
    let choice = '';

    do {
        choice = prompt('Rock, Paper or Scissors?');
    } while (!moves.includes(choice.toLowerCase()));
    
    return choice;
}

// Play round function
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = '';

    if (player == 'rock' && computer == 'paper' ||
        player == 'paper' && computer == 'scissors' ||
        player == 'scissors' && computer == 'rock') {

        result = `You lose! ${computer} beats ${player}.`;

    } else if (player == 'rock' && computer == 'scissors' ||
               player == 'scissors' && computer == 'paper' ||
               player == 'paper' && computer == 'rock') {

        result = `You win! ${player} beats ${computer}.`;

    } else {
        result = "It's a tie!";
    }

    return result;

}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const schissorsButton = document.createElement("button");

rockButton.addEventListener("click", playRound());


/*
// Play game function
function playGame() {

    let playerWins = 0;
    let computerWins = 0;

    // Play n rounds (5 hardcoded)
    for (let i = 0; i < 5; i++) {
        // Prompt user for input
        let playerSelection = getPlayerChoice();

        let computerSelection = getComputerChoice();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes('win')) {
            playerWins += 1;
        } else if (roundResult.includes('lose')) {
            computerWins += 1;
        }
    }

    // Print game results
    console.log(`Final results: Player [${playerWins} points] Computer [${computerWins} points]`);

    if (playerWins > computerWins) {
        console.log('Player wins!');
    } else if (playerWins < computerWins) {
        console.log('Computer wins!');
    } else {
        console.log('It\'s a tie!')
    }


}
*/

playGame();