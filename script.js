let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let differH;
let differC;

// Write your code below:

function generateTarget() {
    let x = Math.random();
    x *= 10;
    x = Math.floor(x);
    return x;
}

function getAbsoluteDistance(human, computer, target) {
    differH = Number(target) - Number(human);
    differC =  target - computer;
    if (differH < 0) {
        differH *= -1;
    }
    if (differC < 0) {
        differC *= -1
    }
    console.log(differH, differC);
}

function compareGuesses(human, computer, target) {

    getAbsoluteDistance(human, computer, target);
    console.log(differH, differC);
    
    if (human > 9 || human < 0) {
        alert('Number has to be between 0 and 9.')
    }
    if (differH <= differC ) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

function advanceRound() {
    currentRoundNumber ++;
}
