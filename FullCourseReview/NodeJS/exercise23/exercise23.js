'use strict';
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let N;
readline.question('How many primes do you want? ', number => {
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


function isPrime(number) {
    if (number === 0 || number === 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}