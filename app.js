// Initialize moves array
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

    // Display running score
    let scoreDisplay = document.createElement("div");
    scoreDisplay.textContent = `Player: ${playerWins} Computer: ${computerWins}`;
    document.body.appendChild(scoreDisplay);

    // Dusplay round result
    let roundResult = document.createElement("div");
    document.body.appendChild(roundResult);

    // Display game result
    let gameResult = document.createElement("Div");
    document.body.appendChild(gameResult);

    // Check for click and return result using playRound() function
    rockButton.addEventListener("click", () => {
        // Initialize computer selection
        let computerSelection = getComputerChoice();
        
        let round = playRound('rock', computerSelection);

        // Display current round result
        roundResult.textContent = round;

        if (round.includes('win')) {
            playerWins += 1;
        } else if (round.includes('lose')) {
            computerWins += 1;
        }

        // Update displayed score
        scoreDisplay.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

        if (playerWins == 5) {
            gameResult.textContent = 'Player wins the game!';

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

        } else if (computerWins == 5) {
            gameResult.textContent = 'Computer wins the game!';

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    });

    paperButton.addEventListener("click", () => {
        // Initialize computer selection
        let computerSelection = getComputerChoice();

        let round = playRound('paper', computerSelection);

        // Display current round result
        roundResult.textContent = round;

        if (round.includes('win')) {
            playerWins += 1;
        } else if (round.includes('lose')) {
            computerWins += 1;
        }

        // Update displayed score
        scoreDisplay.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

        if (playerWins == 5) {
            gameResult.textContent = 'Player wins the game!';

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

        } else if (computerWins == 5) {
            gameResult.textContent = 'Computer wins the game!';

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    });

    scissorsButton.addEventListener("click", () => {
        // Initialize computer selection
        let computerSelection = getComputerChoice();

        let round = playRound('scissors', computerSelection);

        // Display current round result
        roundResult.textContent = round;

        if (round.includes('win')) {
            playerWins += 1;
        } else if (round.includes('lose')) {
            computerWins += 1;
        }

        // Update displayed score
        scoreDisplay.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

        if (playerWins == 5) {
            gameResult.textContent = 'Player wins the game!';

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

        } else if (computerWins == 5) {
            gameResult.textContent = 'Computer wins the game!';

            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    });
}

playGame();