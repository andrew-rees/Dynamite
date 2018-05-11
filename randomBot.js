class Bot {
    makeMove(gamestate) {
        let countOwnDynamite = 0;
        for(let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p1 === "D") {
                countOwnDynamite++
            }}
        if (countOwnDynamite >= 100) {
            var fourMoves = ['R', 'P', 'S', 'W']; 
            var randomFourMoves = fourMoves[Math.floor(Math.random() * fourMoves.length)];
            return randomFourMoves;
        } else {
            var fiveMoves = ['R', 'P', 'S', 'W', 'D']; 
            var randomFiveMoves = fiveMoves[Math.floor(Math.random() * fiveMoves.length)];
            return randomFiveMoves;
        }

        
    }
}

module.exports = new Bot();
