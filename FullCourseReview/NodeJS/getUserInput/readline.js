const readline = require("readline");

export const getUserInput = () => {
    const { stdin, stdout } = process;
    const rl = readline.createInterface({ input: stdin, output: stdout });
    rl.question("Can you confirm? Y/N", (answer) => {
        if (answer.toLowerCase() === "5") {
            console.log('said yes');
        }
        rl.close();
    });
    return true;
};