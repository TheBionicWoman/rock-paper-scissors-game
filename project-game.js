function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    return RandomComputerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playRound(playerSelection, computerSelection, computerScore, playerScore) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            return 'You lose! Paper beats Rock!';
        }
        else if (computerSelection === 'scissors') {
            playerScore += 1;
            return "You win! Rock beats Scissors!";
        }
        else if (computerSelection === 'rock') {
            return "You both chose rock! It's a tie!";
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection === 'scissors') {
            computerScore += 1;
            return "You lose! Scissors beats Paper!";
        }
        else if (computerSelection === 'paper') {
            return "You both chose Paper! It's a tie!";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return "You lose! Rock beats Scissors!";
        }
        else if (computerSelection === 'paper') {
            playerScore += 1;
            return "You win! Scissors beats Paper!";
        }
        else if (computerSelection === 'scissors') {
            return "You both chose Scissors! It's a tie!";
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection, computerScore, playerScore));
    }
}

game();