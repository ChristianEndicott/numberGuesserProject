let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let differH;
let differC;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

function getAbsoluteDistance(human, computer, target) {
    differH = Math.abs(target - human)
    differC = Math.abs(target - computer)
}

function compareGuesses(human, computer, target) {
    getAbsoluteDistance(human, computer, target);
    if(human < 0 || human > 9) {alert('Number must be between 0 to 9')};
    differH <= differC
}

function updateScore(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
    currentRoundNumber ++;
}
