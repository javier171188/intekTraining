'use strict';

const { rotateMatrix } = require('./exercise5');

test('Basic test', () => {
    const A = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0]];

    rotateMatrix(A);
    expect(A).toEqual([
        [1, 1, 0],
        [0, 0, 1],
        [0, 0, 1]])

    rotateMatrix(A, false);
    rotateMatrix(A, false);
    expect(A).toEqual([
        [1, 0, 0],
        [1, 0, 0],
        [0, 1, 1]])

    const B = [
        [2, 4, 6, 8, 9],
        [1, 27, 5, 6, 7]
    ];
    rotateMatrix(B);
    expect(B).toEqual([
        [1, 2],
        [27, 4],
        [5, 6],
        [6, 8],
        [7, 9]
    ]);
    rotateMatrix(B, false);
    expect(B).toEqual([
        [2, 4, 6, 8, 9],
        [1, 27, 5, 6, 7]
    ])
    rotateMatrix(B, false);
    expect(B).toEqual([
        [9, 7],
        [8, 6],
        [6, 5],
        [4, 27],
        [2, 1]
    ]);

    const C = [
        [9, 7],
        [8, 6],
        [6, 5],
        [4, 27],
        [2, 1]
    ];
    rotateMatrix(C);
    expect(C).toEqual([
        [2, 4, 6, 8, 9],
        [1, 27, 5, 6, 7]
    ]);
    rotateMatrix(C);
    rotateMatrix(C);
    expect(C).toEqual([
        [7, 6, 5, 27, 1],
        [9, 8, 6, 4, 2]
    ]);
})

test('Small matrixes', () => {
    const A = [];
    rotateMatrix(A);
    expect(A).toEqual([]);

    const B = [[]];
    rotateMatrix(B);
    expect(B).toEqual([[]]);

    const C = [10];
    rotateMatrix(C);
    expect(C).toEqual([10]);

    const D = [[10]];
    rotateMatrix(D);
    expect(D).toEqual([[10]]);

    const E = [[10, 11]];
    rotateMatrix(E, false);
    expect(E).toEqual([[11], [10]]);
    rotateMatrix(E);
    rotateMatrix(E);
    expect(E).toEqual([[10], [11]]);

    const F = [[20], [30]];
    rotateMatrix(F, false);
    expect(F).toEqual([[20, 30]]);
    rotateMatrix(F);
    rotateMatrix(F);
    expect(F).toEqual([[30, 20]]);

    const G = [[10, 11], [20, 25]];
    rotateMatrix(G, false);
    expect(G).toEqual([[11, 25], [10, 20]]);
    rotateMatrix(G);
    rotateMatrix(G);
    expect(G).toEqual([[20, 10], [25, 11]]);
})