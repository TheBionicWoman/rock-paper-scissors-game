function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    return RandomComputerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    /* console.log(randomComputerSelection) */
}

const playerSelection = prompt("Choose rock, paper, or scissors: ")
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection != 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            return 'You win! Rock beats Scissors'
        }
    } else if (playerSelection === 'rock' && computerSelection === 'rock'){
        return "You both chose rock! It's a tie"
    }

    if (playerSelection === 'paper' && computerSelection != 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            return 'You lose! Scissors beat Paper';
        }
    } else if (playerSelection === 'paper' && computerSelection == 'paper') {
        return "You both chose paper! It's a tie";
    }

    if (playerSelection === 'scissors' && computerSelection != 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            return 'You win! Scissors beat Paper';
        }
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "You both chose scissors! It's a tie";
    }
}

console.log(playRound(playerSelection, computerSelection))