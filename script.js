const moves = ["Rock", "Paper", "Scissors"];

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
            pSelect === 2 ? "You Lose" : "You Win"
        }
    }
    else {
        if (pSelect === 1) {
            return "You Lose"
        } else {
            cSelect === 1 ? "You Lose" : "You Win"
        }
    }
}
const pSelect = moves.indexOf("Rock");
const cSelect = computerPlay();
console.log(playRound(pSelect, cSelect));