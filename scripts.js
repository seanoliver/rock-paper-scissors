// {f} return the computer's move
function getComputerChoice() {
    const moves = {
        '1' : 'rock', 
        '2' : 'paper',
        '3' : 'scissors'
    }

    return moves[Math.ceil(Math.random()*3)];
}

// {f} take player and computers move and return the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const resultObject = {};

    if (playerSelection === computerSelection) {
        resultObject.message = `You threw ${playerSelection}!\nThe computer threw ${computerSelection}!\nIt's a tie`;
        resultObject.outcome = 'tie';
    }

    const outcomeMessage = {
        'rockScissors' : 'Rock crushes scissors',
        'scissorsPaper' : 'Scissors cut paper',
        'paperRock' : 'Paper covers rock'
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            resultObject.message = `You threw rock!\nThe computer threw scissors!\n${outcomeMessage.rockScissors}`;
            resultObject.outcome = 'win';
        } else if (computerSelection === "paper")  {
            resultObject.message = `You threw rock!\nThe computer threw paper!\n${outcomeMessage.paperRock}`;
            resultObject.outcome = 'lose';
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            resultObject.message = `You threw scissors!\nThe computer threw paper!\n${outcomeMessage.scissorsPaper}`;
            resultObject.outcome = 'win';
        } else if (computerSelection === "rock") {
            resultObject.message = `You threw scissors!\nThe computer threw rock!\n${outcomeMessage.rockScissors}`;
            resultObject.outcome = 'lose';
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultObject.message = `You threw paper!\nThe computer threw rock!\n${outcomeMessage.paperRock}`;
            resultObject.outcome = 'win';
        } else if (computerSelection === "scissors") {
            resultObject.message = `You threw paper!\nThe computer threw scissors!\n${outcomeMessage.scissorsPaper}`;
            resultObject.outcome = 'lose';
        }
    }

    return resultObject;
}

// {f} play a series of rounds and keep track of score
function game(rounds) {
    rounds = validateInput(rounds);

    let playerScore = 0;
    let computerScore = 0;
    let outcomeMessage = '';
    let roundsPlayed = 0;

    // Continue rounds until one player has more than 50% of options
    while (Math.max(playerScore, computerScore) < Math.ceil(rounds/2)) {
        roundsPlayed++; 

        const playerSelection = prompt('Pick your poison (rock, paper, or scissors).');
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        if (result.outcome === 'win') {
            outcomeMessage = `${result.message}! You win!`
            playerScore++;
        } else if (result.outcome == 'lose') {
            outcomeMessage = `${result.message}. You lose.`
            computerScore++;
        } else {
            outcomeMessage = `${result.message}!`
        }
        console.log(`Round ${roundsPlayed}`, `You: ${playerScore}`, `Computer: ${computerScore}`);
        alert(result.message);
        alert(`==Current Score==\nYou: ${playerScore}; Computer: ${computerScore}.`);
    }

if (playerScore > computerScore) {
    alert(`=🎉= YOU WIN =🎉=\nYou: ${playerScore}; Computer: ${computerScore}.`);
} else {
    alert(`=😭= YOU LOSE =😭=\nYou: ${playerScore}; Computer: ${computerScore}.`);
}

}

let numRounds = 3;

prompt('How many rounds? (Default = 3)', numRounds);

// {f} confirm # of rounds is even and positive
function validateInput(input) {
    if ((input > 0) && (input % 2 > 0)) return input;
    
    let message = '';
    if (input < 0) message = "You entered a negative number."
    else if (input % 2 === 0) message = "You entered an even number."

    if (message) {
        prompt(`${message}\nPlease enter a positive, odd integer:`, input);
    }
    return validateInput(input);
}

console.log(game(numRounds));
// console.log(playRound(playerSelection, computerSelection));
// console.log(getComputerChoice());