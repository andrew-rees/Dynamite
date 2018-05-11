const chai = require("chai");
const mocha = require("mocha");
const bot = require("../src/andReesPlicant");

const expect = chai.expect;

describe("make move", () => {
    it("plays a valid first move", () => {
        let move = bot.makeMove({rounds:[]});
        console.log(move);
        expect(move).to.satisfy(move => {
            return (
                move === "R" ||
                move === "P" ||
                move === "S" ||
                move === "W" ||
                move === "D"
            );
        });
    });

    it("copies the previous move", () => {
        let move = bot.makeMove({rounds:[
            {
                p1: "R",
                p2: "P"
            }
        ]});
        expect(move).to.equal("P");
    });
});
