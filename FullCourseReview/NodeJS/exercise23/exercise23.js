'use strict';
import chalk from 'chalk';
import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('How many prime numbers do you want? ', (N) => {

    computePrimes(N);

    rl.close()
});

function computePrimes(N) {
    let NInt = parseInt(N);
    let primeNumbers = [];
    let propose = 2;
    logBar(0);
    let prop = 0;
    while (primeNumbers.length < NInt) {
        if (isPrime(propose)) {
            primeNumbers.push(propose);
            prop = primeNumbers.length / NInt;
            logBar(prop);
        }
        propose++;
    }
    console.log('');
    console.log(primeNumbers);
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
