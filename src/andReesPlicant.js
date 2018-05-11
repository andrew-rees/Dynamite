class Bot {
    makeMove(gamestate) {
        //counts P2 moves
        let countEnemyRocks = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p2 === "R") {
                countEnemyRocks++
            }
        }
        let countEnemyPapers = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p2 === "P") {
                countEnemyPapers++
            }
        }
        let countEnemyScissors = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p2 === "S") {
                countEnemyScissors++
            }
        }
        let countEnemyDynamite = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p2 === "D") {
                countEnemyDynamite++
            }
        }
        let countEnemyWaterballoons = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p2 === "W") {
                countEnemyWaterballoons++
            }
        }
        //counts P1 moves
        let countOwnDynamite = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p1 === "D") {
                countOwnDynamite++
            }
        }
        let countOwnWaterballoons = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p1 === "W") {
                countOwnWaterballoons++
            }
        }
        let countOwnRocks = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p1 === "R") {
                countOwnRocks++
            }
        }
        let countOwnPapers = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p1 === "P") {
                countOwnPapers++
            }
        }
        let countOwnScissors = 0;
        for (let i = 0; i < gamestate.rounds.length; i++) {
            let thisRound = gamestate.rounds[i];
            if (thisRound.p1 === "S") {
                countOwnScissors++
            }
        }

        //on first move, returns a random move
        if (gamestate.rounds.length === 0) {
            var fiveMoves = ['R', 'P', 'S', 'D', 'W'];
            var randomFirstMove = fiveMoves[Math.floor(Math.random() * fiveMoves.length)];
            return randomFirstMove;
        }
        // from the 1st round onwards, play the move the opponent played previously, unless countOwnDyamite >= 100
        let previousRound = gamestate.rounds[gamestate.rounds.length - 1];
        // if no own D left, don't play D
        if (countOwnDynamite >= 100 && countEnemyDynamite >= 100) {
            if (previousRound.p2 === "R") {
                return "R"
            } else if (previousRound.p2 === "P") {
                return "P"
            } else if (previousRound.p2 === "S") {
                return "S"
            } else if (previousRound.p2 === "D" || previousRound.p2 === "W") {
                var threeMoves = ['R', 'P', 'S'];
                var randomThreeMoves = threeMoves[Math.floor(Math.random() * threeMoves.length)];
                return randomThreeMoves;
            }

            //if opp has no D, don't do W
        } else if (countEnemyDynamite >= 100 && countOwnDynamite < 100) {
            if (previousRound.p2 === "R") {
                return "R"
            } else if (previousRound.p2 === "P") {
                return "P"
            } else if (previousRound.p2 === "S") {
                return "S"
            } else if (previousRound.p2 === "D") {
                var fourMovesRPSW = ['R', 'P', 'S', 'W'];
                var randomFourMovesRPSW = fourMovesRPSW[Math.floor(Math.random() * fourMovesRPSW.length)];
                return randomFourMovesRPSW;
            } else if (previousRound.p2 === "W") {
                var fourMovesRPSD = ['R', 'P', 'S',/* 'D'*/];
                var randomFourMovesRPSD = fourMovesRPSD[Math.floor(Math.random() * fourMovesRPSD.length)];
                return randomFourMovesRPSD;
            }
        } else if (countOwnDynamite >= 100 && countEnemyDynamite < 100) {
            if (previousRound.p2 === "R") {
                return "R"
            } else if (previousRound.p2 === "P") {
                return "P"
            } else if (previousRound.p2 === "S") {
                return "S"
            } else if (previousRound.p2 === "D") {
                var fourMovesRPSW = ['R', 'P', 'S', 'W'];
                var randomFourMovesRPSW = fourMovesRPSW[Math.floor(Math.random() * fourMovesRPSW.length)];
                return randomFourMovesRPSW;
            } else if (previousRound.p2 === "W") {
                return "W"
            }
        }
            //if still have own D left, copy opponent
            else {
                if (previousRound.p2 === "R") {
                    return "R"
                } else if (previousRound.p2 === "P") {
                    return "P"
                } else if (previousRound.p2 === "S") {
                    return "S"
                } else if (previousRound.p2 === "D") {
                    var fourMovesRPSW = ['R', 'P', 'S', 'W'];
                    var randomFourMovesRPSW = fourMovesRPSW[Math.floor(Math.random() * fourMovesRPSW.length)];
                    return randomFourMovesRPSW;
                } else if (previousRound.p2 === "W") {
                    return "W"
                }
            }



        }
    }

//DRAWING
//if previous round(s) were draw(s), play D.



module.exports = new Bot();