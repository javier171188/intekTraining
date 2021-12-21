'use strict';
const colors = require('colors/safe');

getFirstPrimes();

function getFirstPrimes() {
    let N = process.argv[2];
    let primeNumbers = computePrimes(N);

    return primeNumbers;
}

function computePrimes(N) {
    let NInt = Math.abs(parseInt(N));
    if (!NInt) return [];
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
    return primeNumbers;
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
    const done = "█".repeat(propTotal);
    const empty = "░".repeat(size - propTotal);
    process.stdout.write(colors.blue(colors.bgBlack(`\r[${done}${empty}] `)) + colors.bgBlack(colors.green(`${Math.round(prop * 100)}% `)));
}

module.exports = {
    getFirstPrimes,
    computePrimes,
    logBar
};