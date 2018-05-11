//Returns a certain move over and over
    return "R"

//Randomly selects from all 5 moves (throws error once D > 100)
    var fiveMoves = ['R', 'P', 'S', 'D', 'W']; 
    var randomNextMove = fiveMoves[Math.floor(Math.random() * fiveMoves.length)];
    return randomNextMove;

//count times P2 uses rock
    let countEnemyRocks = 0;
    for(let i = 1; i < gamestate.rounds.length; i++) {
        let thisRound = gamestate.rounds[i];
        if (thisRound.p2 === "R") {
            countEnemyRocks++
        }}


// First move = random, 2nd move onwards is same as p2 previous
    //on first move, returns a random move
    if (gamestate.rounds.length === 0) {
        var fiveMoves = ['R', 'P', 'S', 'D', 'W']; 
        var randomNextMove = fiveMoves[Math.floor(Math.random() * fiveMoves.length)];
        return randomNextMove;
    }
    // from the 1st round onwards, play the move the opponent played previously
    let thisRound = gamestate.rounds[gamestate.rounds.length - 1];
    if (thisRound.p2 === "R") {
        return "R"
    } else if (thisRound.p2 === "P") {
        return "P"
    } else if (thisRound.p2 === "S") {
        return "S"
    } else if (thisRound.p2 === "D") {
        return "D"
    } else if (thisRound.p2 === "W") {
        return "W"
    }
