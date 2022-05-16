function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min);
    };
    return moves[getRandomInteger(0, 2)];
}

console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection){
        return "Draw";
    }
    else if (playerSelection>computerSelection){
        if(computerSelection===1){
            return "You Win"
        }else{
            if(playerSelection===2){return "You Lose"}else{return "You Win"}
        }
    }
    else {
        if(playerSelection===1){
            return "You Lose"
        }else{
            if(computerSelection===1){
                return "You Lose"
            }else{return "You Win"}
        }
    }
}
console.log(playRound(0,0));