function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min);
    };
    return moves[getRandomInteger(0,2)];
}

console.log(computerPlay())

