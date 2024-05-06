const moves = ['rock', 'paper', 'scissors'];

// Get computer choice and return it
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * moves.length);

    return moves[computerChoice];
}


// Play a single round and return result
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
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


// Play game function
function playGame() {

    let playerWins = 0;
    let computerWins = 0;

    // Create buttons to play game in ui
    const rockButton = document.createElement("button");
    rockButton.textContent = 'Rock';
    const paperButton = document.createElement("button");
    paperButton.textContent = 'Paper';
    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = 'Scissors';

    // Append buttons to a div to display them
    const buttonsDiv = document.createElement("div");

    buttonsDiv.appendChild(rockButton);
    buttonsDiv.appendChild(paperButton);
    buttonsDiv.appendChild(scissorsButton);

    document.body.appendChild(buttonsDiv);

    // Check for click and return result using playRound() function
    rockButton.addEventListener("click", () => {
        // Initialise computer selection
        let computerSelection = getComputerChoice();
        
        let roundResult = playRound('rock', computerSelection);

        if (roundResult.includes('win')) {
            playerWins += 1;
        } else if (roundResult.includes('lose')) {
            computerWins += 1;
        }

        if (playerWins == 5) {
            alert('Player wins the game!');

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

        } else if (computerWins == 5) {
            alert('Computer wins the game!');

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    });

    paperButton.addEventListener("click", () => {
        // Initialise computer selection
        let computerSelection = getComputerChoice();

        let roundResult = playRound('paper', computerSelection);

        if (roundResult.includes('win')) {
            playerWins += 1;
        } else if (roundResult.includes('lose')) {
            computerWins += 1;
        }

        if (playerWins == 5) {
            alert('Player wins the game!');

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

        } else if (computerWins == 5) {
            alert('Computer wins the game!');

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    });

    scissorsButton.addEventListener("click", () => {
        // Initialise computer selection
        let computerSelection = getComputerChoice();

        let roundResult = playRound('scissors', computerSelection);

        if (roundResult.includes('win')) {
            playerWins += 1;
        } else if (roundResult.includes('lose')) {
            computerWins += 1;
        }

        if (playerWins == 5) {
            alert('Player wins the game!');

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

        } else if (computerWins == 5) {
            alert('Computer wins the game!');

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    });
}

playGame();