'use strict'

const { searchMatrix } = require("./exercise15");

test('Basic tests', () => {
    const A = [
        [0, 5, 7, 9, 10],
        [4, 6, 12, 15, 20],
        [8, 9, 15, 18, 22],
        [10, 12, 16, 25, 30],
        [15, 20, 26, 30, 50],
        [20, 24, 30, 40, 60]
    ]

    let found = searchMatrix(A, 20);

    expect(found).toEqual([
        [1, 4], [4, 1], [5, 0]
    ]);

    found = searchMatrix(A, 23);
    expect(found).toEqual([]);

    found = searchMatrix(A, 0);
    expect(found).toEqual([[0, 0]]);

    found = searchMatrix(A);
    expect(found).toEqual([]);

    found = searchMatrix(A, 2);
    expect(found).toEqual([]);

    found = searchMatrix(A, 10);
    expect(found).toEqual([[0, 4], [3, 0]]);

    found = searchMatrix(A, 60);
    expect(found).toEqual([[5, 4]]);

    found = searchMatrix(A, 15);
    expect(found).toEqual([
        [1, 3],
        [2, 2],
        [4, 0]
    ]);

    found = searchMatrix(A, 16);
    expect(found).toEqual([[3, 2]]);
})

describe('Edge cases', () => {
    test('Empty matrices', () => {
        let A = [];
        let found = searchMatrix(A, 15);
        expect(found).toEqual([])

        A = [[]];
        found = searchMatrix(A, 15);
        expect(found).toEqual([])
    })
    test('Small matrices', () => {
        let A = [[1]];
        let found = searchMatrix(A, 15);
        expect(found).toEqual([]);

        found = searchMatrix(A, 1);
        expect(found).toEqual([[0, 0]]);
    })

    test('Column matrix', () => {
        const A = [
            [0, 5, 7, 9, 10]
        ]
        let found = searchMatrix(A, 1);
        expect(found).toEqual([]);

        found = searchMatrix(A, 7);
        expect(found).toEqual([[0, 2]]);
    })

    test('Row matrix', () => {
        const A = [
            [0], [5], [7], [9], [10]
        ]
        let found = searchMatrix(A, 1);
        expect(found).toEqual([]);

        found = searchMatrix(A, 7);
        expect(found).toEqual([[2, 0]]);
    })
})

