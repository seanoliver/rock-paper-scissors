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
        resultObject.message = `It's a tie`;
        resultObject.outcome = 'tie';
    }

    const outcomeMessages = {
        'rockScissors' : 'Rock crushes scissors',
        'scissorsPaper' : 'Scissors cut paper',
        'paperRock' : 'Paper covers rock'
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            resultObject.message = `${rockScissors}`;
            resultObject.outcome = 'win';
        } else {
            resultObject.message = `${paperRock}`;
            resultObject.outcome = 'lose';
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            resultObject.message = `${scissorsPaper}`;
            resultObject.outcome = 'win';
        } else {
            resultObject.message = `${rockScissors}`;
            resultObject.outcome = 'lose';
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultObject.message = `${paperRock}`;
            resultObject.outcome = 'win';
        } else {
            resultObject.message = `${scissorsPaper}`;
            resultObject.outcome = 'lose';
        }
    }

    return resultObject;
}

// {f} play a series of rounds and keep track of score
function game(rounds) {
    if (rounds % 2 === 0 || rounds < 0) return "Rounds must be a positive, odd number.";

    let playerScore = 0;
    let computerScore = 0;
    let outcomeMessage = '';
    let roundsPlayed = 0;

    while (playerScore + computerScore < rounds) {
        roundsPlayed++;
        console.log(`Round ${roundsPlayed}`, `You: ${playerScore}`, `Computer: ${computerScore}`);

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
    }

    if (playerScore > computerScore) {
        return `You: ${playerScore}; Computer: ${computerScore}. You won!`
    } else {
        return `You: ${playerScore}; Computer: ${computerScore}. You lost.`
    }

}

console.log(game(5));

console.log(playRound(playerSelection, computerSelection));
// console.log(getComputerChoice());