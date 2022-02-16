'use strict';
const { swapArray } = require('./exercise9');

test('Basic tests', () => {
    let a = [1, 4, 2, 3, 0];
    swapArray(a);
    expect(a).toEqual([4, 0, 2, 3, 1]);

    a = [3, 2, 0, 1];
    swapArray(a);
    expect(a).toEqual([1, 0, 3, 2]);

    a = [4, 0, 2, 1, 3];
    swapArray(a);
    expect(a).toEqual([3, 4, 2, 0, 1]);

    a = [0, 1, 2, 3];
    swapArray(a);
    expect(a).toEqual([0, 1, 2, 3]);

    a = [4, 3, 2, 1, 0];
    swapArray(a);
    expect(a).toEqual([0, 1, 2, 3, 4]);
})

test('Small arrays', () => {
    let a = [];
    swapArray(a);
    expect(a).toEqual([]);

    a = [0];
    swapArray(a);
    expect(a).toEqual([0]);

    a = [0, 1];
    swapArray(a);
    expect(a).toEqual([0, 1]);

    a = [1, 0];
    swapArray(a);
    expect(a).toEqual([0, 1]);

    a = [1, 2, 0];
    swapArray(a);
    expect(a).toEqual([2, 0, 1]);
})