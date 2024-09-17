import util from "util";

const firstname = "prabowo";
const lastname = "gibran";

console.info(`hallo ${firstname}`);
console.info(util.format("hallo : %s %s", firstname, lastname));

const goat = {
    firstname1: "anies",
    lastname1: "mahfud",
};

console.info(`next presidential is ${JSON.stringify(goat)}`);
console.info(util.format("goat presidential is : %j", goat));