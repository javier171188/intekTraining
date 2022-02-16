'use strict';
const { makeZeroes } = require('./exercise7');

test('Basic tests', () => {
    const A = [
        [2, 4, 6, 8, 9],
        [1, 2, 5, 9, 7],
        [1, 8, 0, 6, 7],
        [1, 2, 4, 3, 1],
    ];
    makeZeroes(A);
    expect(A).toEqual([
        [2, 4, 0, 8, 9],
        [1, 2, 0, 9, 7],
        [0, 0, 0, 0, 0],
        [1, 2, 0, 3, 1],
    ])

    const B = [
        [0, 4, 6, 0],
        [1, 2, 5, 7],
        [1, 8, 8, 7],
        [1, 2, 4, 1],
        [0, 7, 6, 0]
    ];
    makeZeroes(B);
    expect(B).toEqual([
        [0, 0, 0, 0],
        [0, 2, 5, 0],
        [0, 8, 8, 0],
        [0, 2, 4, 0],
        [0, 0, 0, 0]
    ])

    const C = [
        [2, 4, 6, 8, 9],
        [1, 2, 5, 9, 7],
        [1, 8, 8, 6, 7],
        [1, 2, 4, 3, 1],
        [9, 7, 6, 1, 2]
    ];
    makeZeroes(C);
    expect(C).toEqual([
        [2, 4, 6, 8, 9],
        [1, 2, 5, 9, 7],
        [1, 8, 8, 6, 7],
        [1, 2, 4, 3, 1],
        [9, 7, 6, 1, 2]
    ])

    const D = [
        [2, 4, 6, 8, 0],
        [1, 2, 5, 0, 7],
        [1, 8, 0, 6, 7],
        [1, 0, 4, 3, 1],
        [0, 7, 6, 1, 2]
    ];
    makeZeroes(D);
    expect(D).toEqual([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ])
})

test('Small matrices', () => {
    const A = [];
    makeZeroes(A);
    expect(A).toEqual([]);

    const B = [[]];
    makeZeroes(B);
    expect(B).toEqual([[]]);

    let C = [1];
    makeZeroes(C);
    expect(C).toEqual([1]);

    C = [0];
    makeZeroes(C);
    expect(C).toEqual([0]);

    C = [[10]];
    makeZeroes(C);
    expect(C).toEqual([[10]]);

    C = [[1, 2, 4, 5, 6, 7]];
    makeZeroes(C);
    expect(C).toEqual([[1, 2, 4, 5, 6, 7]]);

    C = [[1, 2, 4, 5, 6, 7, 8, 9, 0]];
    makeZeroes(C);
    expect(C).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0]])

    C = [[1], [2], [3], [4]];
    makeZeroes(C);
    expect(C).toEqual([[1], [2], [3], [4]]);

    C = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [0]];
    makeZeroes(C);
    expect(C).toEqual([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]])

    C = [[7, 8], [9, 8]];
    makeZeroes(C);
    expect(C).toEqual([[7, 8], [9, 8]]);

    C = [[0, 8], [9, 8]];
    makeZeroes(C);
    expect(C).toEqual([[0, 0], [0, 8]]);

    C = [[0, 8], [9, 0]];
    makeZeroes(C);
    expect(C).toEqual([[0, 0], [0, 0]]);
})