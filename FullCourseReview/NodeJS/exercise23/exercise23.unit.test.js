'use strict';
const { getFirstPrimes, computePrimes, logBar } = require('./exercise23');
const colors = require('colors/safe');

test('Check the bar', () => {
    expect(true).toBe(true);
    const barrSpy = jest.spyOn(console._stdout, 'write')
    logBar(0);
    expect(barrSpy).toHaveBeenCalledWith(colors.blue(colors.bgBlack(`\r[░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] `)) + colors.bgBlack(colors.green(`0% `)));
    logBar(0.5);
    expect(barrSpy).toHaveBeenCalledWith(colors.blue(colors.bgBlack(`\r[████████████████████░░░░░░░░░░░░░░░░░░░░] `)) + colors.bgBlack(colors.green(`50% `)));
    logBar(1);
    expect(barrSpy).toHaveBeenCalledWith(colors.blue(colors.bgBlack(`\r[████████████████████████████████████████] `)) + colors.bgBlack(colors.green(`100% `)));
})

jest.mock("readline");
test('Test users input and log the results', () => {
    //Input: '5'
    const consoleSpy = jest.spyOn(console, 'log');
    const barrSpy = jest.spyOn(console._stdout, 'write')
    let primeNumbers = getFirstPrimes();
    expect(primeNumbers).toEqual([2, 3, 5, 7, 11]);
    expect(consoleSpy).toHaveBeenCalledWith('');
    expect(consoleSpy).toHaveBeenCalledWith(primeNumbers);
    expect(barrSpy).toHaveBeenCalledWith(colors.blue(colors.bgBlack(`\r[████████████████████████████████████████] `)) + colors.bgBlack(colors.green(`100% `)));
})

test('Check computePrimes function. Limit Values.', () => {
    let primeNumbers = computePrimes('0');
    expect(primeNumbers).toEqual([]);

    primeNumbers = computePrimes('');
    expect(primeNumbers).toEqual([]);

    primeNumbers = computePrimes('1');
    expect(primeNumbers).toEqual([2]);
})


test('Check computePrimes function. Unexpected values.', () => {
    let primeNumbers = computePrimes(3);
    expect(primeNumbers).toEqual([2, 3, 5]);

    primeNumbers = computePrimes('-8');
    expect(primeNumbers).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);

    primeNumbers = computePrimes('Hello');
    expect(primeNumbers).toEqual([]);

    primeNumbers = computePrimes('5.5');
    expect(primeNumbers).toEqual([2, 3, 5, 7, 11]);
})

