'use strict'
const reverseBlocks = require('./exercise11');

test('Basic test', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;

    reverseBlocks(arr, blockSize);
    expect(arr).toEqual([
        2, 1, 0, 5, 4,
        3, 8, 7, 6, 9
    ]);
})

test('Not remaining number', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 2;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        1, 0, 3, 2, 5, 4, 7, 6, 9, 8
    ]);
})

test('Block size larger than half the size of array', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 7;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        6, 5, 4, 3, 2, 1, 0, 9, 8, 7
    ]);
})


test('Block size larger than array size', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 20;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        9, 8, 7, 6, 5, 4, 3, 2, 1, 0
    ]);
})

test('Block size equals array size', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 10;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        9, 8, 7, 6, 5, 4, 3, 2, 1, 0
    ]);
})

test('Empty array', () => {
    const arr = [];
    const blockSize = 3;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([

    ]);
})

test('Block size equals one', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 1;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
})

test('Block size equals zero (change to one)', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 0;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
})

test('Negative block size (change to one)', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = -2;

    reverseBlocks(arr, blockSize)
    expect(arr).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
})