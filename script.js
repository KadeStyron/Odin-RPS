var computerScore = 0;
var humanScore = 0;
playGame();
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if(n === 0) {
        return "rock";
    }
    else if(n === 1) {
        return "paper";
    }
    else if(n === 2) {
        return "scissors";
    }
    else {
        return "error";
    }
}

function getHumanChoice() {
    let s = window.prompt("Rock, Paper, or Scissors")
    return s.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
    var winner = 0;
    if(computerChoice === "rock") {
        if(humanChoice === "paper") {
            ++winner;
        }
        else if (humanChoice === "scissors") {
            winner += 2;
        }
    }
    else if(computerChoice === "paper") {
        if(humanChoice === "scissors") {
            ++winner;
        }
        else if (humanChoice === "rock") {
            winner += 2;
        }
    }
    else if(computerChoice === "scissors") {
        if(humanChoice === "rock") {
            ++winner;
        }
        else if (humanChoice === "paper") {
            winner += 2;
        }
    }
    else{
        console.log("error in playRound");
    }
    if(winner ===  0) {
        console.log("You draw! both chose " + humanChoice);
    }
    else if(winner === 1) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        ++humanScore;
    }
    else if(winner === 2) {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        ++computerScore;
    }
}
function playGame() {
    computerScore = 0;
    humanScore = 0;
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore) {
        console.log("Congratulations you win, your score was " + humanScore + " which beat " + computerScore + "." );
    } else if(humanScore < computerScore){
        console.log("Sorry you lose, your score was " + humanScore + " which  didn't beat " + computerScore + "." );
    } else {
        console.log("You tied! You both scored " + humanScore + "!");
    }
}
