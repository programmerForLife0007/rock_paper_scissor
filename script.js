const moves = ["rock", "paper", "scissors"];

function computerPlay() {
    return Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + 0);
};


function playRound(pSelect, cSelect) {
    if (pSelect === cSelect) {
        return "Draw";
    }
    else if (pSelect > cSelect) {
        if (cSelect === 1) {
            return "You Win"
        } else {
            return pSelect === 2 ? "You Lose" : "You Win"
        }
    }
    else {
        if (pSelect === 1) {
            return "You Lose"
        } else {
            return cSelect === 1 ? "You Lose" : "You Win"
        }
    }
}


for (let i = 0; i < 5; i++) {
    // your code here!
    const pSelect = moves.indexOf("Rock");
    const cSelect = computerPlay();
    playRound(pSelect, cSelect)
    console.log(playRound(pSelect, cSelect));
    
}
let score = 0;