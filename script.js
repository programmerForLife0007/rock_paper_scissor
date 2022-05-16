const moves = ["rock", "paper", "scissors"];


function computerPlay() {
    return Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + 0);
};

function playRound(pSelect, cSelect) {
    if (pSelect === cSelect) {
        return score = score + 0;
    }
    else if (pSelect > cSelect) {
        if (cSelect === 1) {
            return score++
        } else {
            return pSelect === 2 ? score-- : score++
        }
    }
    else {
        if (pSelect === 1) {
            return score--
        } else {
            return cSelect === 1 ? score-- : score++
        }
    }
}


let score = 0;

for (let i = 0; i < 5; i++) {
    let userPlay = prompt("Rock, Paper, Scissors").toLowerCase();
    const pSelect = moves.indexOf(userPlay);
    const cSelect = computerPlay();
    playRound(pSelect, cSelect);
    console.log(score);
}



(score === 0) ? console.log("It's Draw")
    : (score > 0) ? console.log("You Win")
        : console.log("You Lose")