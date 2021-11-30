'use strict';
import chalk from 'chalk';


/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let N;*/
/*readline.question('How many prime numbers do you want? ', (number) => {
    N = number;
    let NInt = parseInt(N);
    let primeNumbers = [];

    let propose = 2;
    while (primeNumbers.length < NInt) {
        if (isPrime(propose)) {
            primeNumbers.push(propose);
        }
        propose++;
    }

    console.log(primeNumbers);
    readline.close();
});
*/
let primeNumbers = [];
let NInt = 4;
let propose = 2;


logBar(0);
while (primeNumbers.length < NInt) {
    if (isPrime(propose)) {
        primeNumbers.push(propose);
    }
    propose++;
}

console.log(primeNumbers);





/*function main() {
    for (let i = 0; i <= 40; i++) {
        const dots = "█".repeat(i)
        const left = 40 - i
        const empty = "░".repeat(left)
        process.stdout.write(chalk.blue.bgBlack.bold(`\r[${dots}${empty}] `) + chalk.greenBright.bgBlack(`${Math.round(i * 2.5)}% `));

    }
    return;
}

main();*/

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

function isPrime(number) {
    if (number === 0 || number === 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function logBar(prop) {
    let size = 40;
    let propTotal = parseInt(prop * size);
    const dots = "█".repeat(propTotal);
    const empty = "░".repeat(size - propTotal);
    process.stdout.write(chalk.blue.bgBlack.bold(`\r[${dots}${empty}] `) + chalk.greenBright.bgBlack(`${Math.round(prop * 100)}% `));
}
