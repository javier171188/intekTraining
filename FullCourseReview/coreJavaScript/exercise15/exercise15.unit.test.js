'use strict';
const { balanceIndex } = require('./exercise15');

test('Basic test', () => {
    let arrayToBalance = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
    let balancingIndex = balanceIndex(arrayToBalance);

    expect(balancingIndex).toBe(6);
})

test('Small arrays', () => {
    let arrayToBalance = [];
    let balancingIndex = balanceIndex(arrayToBalance);
    expect(balancingIndex).toBe(-1);

    arrayToBalance = [1];
    balancingIndex = balanceIndex(arrayToBalance);
    expect(balancingIndex).toBe(-1);

    arrayToBalance = [1, 1];
    balancingIndex = balanceIndex(arrayToBalance);
    expect(balancingIndex).toBe(0);

    arrayToBalance = [2, 1, 1];
    balancingIndex = balanceIndex(arrayToBalance);
    expect(balancingIndex).toBe(0);

    arrayToBalance = [1, 1, 2];
    balancingIndex = balanceIndex(arrayToBalance);
    expect(balancingIndex).toBe(1);
})


test('Bug', () => {
    let arrayToBalance = [4, 2, 4, 2];
    let balancingIndex = balanceIndex(arrayToBalance);
    expect(balancingIndex).toBe(1);
})