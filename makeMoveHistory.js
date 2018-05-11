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
