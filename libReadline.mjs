import readline from "readline";
import process  from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("siapa dalang G30SPKI ?", (inputan) => {
    console.info(`bedebah ${inputan}`);
    input.close();
});