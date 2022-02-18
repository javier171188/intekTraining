'use strict'
const { findRoutes } = require('./exercise14')

test('Basic test', () => {
    const A = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ];

    const paths = findRoutes(A);
    const values = paths.map(p => p.map(e => e.value));
    const coords = paths.map(p => p.map(e => e.coordinates));
    expect(values).toEqual([
        ['a', 'b', 'c', 'f', 'i'],
        ['a', 'b', 'e', 'f', 'i'],
        ['a', 'b', 'e', 'h', 'i'],
        ['a', 'd', 'e', 'f', 'i'],
        ['a', 'd', 'e', 'h', 'i'],
        ['a', 'd', 'g', 'h', 'i']]);
    expect(coords).toEqual([
        [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
        [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
        [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]],
        [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]
    ]);
})

test('Test routes', () => {
    const A = [
        ['a', 'b', 'c', 'd', 'e', 'f'],
        ['g', 'h', 'i', 'j', 'k', 'l'],
        ['m', 'n', 'o', 'p', 'q', 'r'],
        ['s', 't', 'u', 'v', 'w', 'x'],
        ['y', 'z', 'A', 'B', 'C', 'D'],
    ];
    let paths = findRoutes(A, 1, 2, 3, 3);
    let values = paths.map(p => p.map(e => e.value));
    let coords = paths.map(p => p.map(e => e.coordinates));

    expect(values).toEqual([
        ['i', 'j', 'p', 'v'],
        ['i', 'o', 'p', 'v'],
        ['i', 'o', 'u', 'v']
    ]);
    expect(coords).toEqual([
        [[1, 2], [1, 3], [2, 3], [3, 3]],
        [[1, 2], [2, 2], [2, 3], [3, 3]],
        [[1, 2], [2, 2], [3, 2], [3, 3]]
    ]);

    paths = findRoutes(A, 0, 2, 0, 4);
    values = paths.map(p => p.map(e => e.value));
    coords = paths.map(p => p.map(e => e.coordinates));
    expect(values).toEqual([
        ['c', 'd', 'e']
    ]);
    expect(coords).toEqual([
        [[0, 2], [0, 3], [0, 4]]
    ]);

    paths = findRoutes(A, 2, 0, 4, 0);
    values = paths.map(p => p.map(e => e.value));
    coords = paths.map(p => p.map(e => e.coordinates));
    expect(values).toEqual([
        ['m', 's', 'y']
    ]);
    expect(coords).toEqual([
        [[2, 0], [3, 0], [4, 0]]
    ]);
})

describe('Edge cases', () => {
    test('Row matrix', () => {
        const A = [
            ['a'],
            ['b'],
            ['c'],
            ['d'],
            ['e'],
            ['f'],
            ['g']
        ];
        let paths = findRoutes(A);
        let values = paths.map(p => p.map(e => e.value));
        let coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([
            ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        ]);
        expect(coords).toEqual([
            [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]
        ]);

        paths = findRoutes(A, 1, 0, 4, 0);
        values = paths.map(p => p.map(e => e.value));
        coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([
            ['b', 'c', 'd', 'e']
        ]);
        expect(coords).toEqual([
            [[1, 0], [2, 0], [3, 0], [4, 0]]
        ]);

    });
    test('Colum matrix', () => {
        let A = [
            ['a', 'b', 'c', 'd', 'e', 'f', 'g']];
        let paths = findRoutes(A);
        let values = paths.map(p => p.map(e => e.value));
        let coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([
            ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        ]);
        expect(coords).toEqual([
            [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]]
        ]);

        A = [
            ['a', 'b', 'c', 'd', 'e', 'f', 'g']];
        paths = findRoutes(A, 0, 2, 0, 5);
        values = paths.map(p => p.map(e => e.value));
        coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([
            ['c', 'd', 'e', 'f']
        ]);
        expect(coords).toEqual([
            [[0, 2], [0, 3], [0, 4], [0, 5]]
        ]);
    })
    test('Small matrixes', () => {
        let A = [];
        let paths = findRoutes(A);
        let values = paths.map(p => p.map(e => e.value));
        let coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([]);
        expect(coords).toEqual([]);

        A = [[]];
        paths = findRoutes(A);
        values = paths.map(p => p.map(e => e.value));
        coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([]);
        expect(coords).toEqual([]);

        A = [['a']];
        paths = findRoutes(A);
        values = paths.map(p => p.map(e => e.value));
        coords = paths.map(p => p.map(e => e.coordinates));
        expect(values).toEqual([['a']]);
        expect(coords).toEqual([[[0, 0]]]);
    })
})

test('Start-end outside limits', () => {
    const A = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ];

    let paths = findRoutes(A, -10, -20, 90, 100);
    let values = paths.map(p => p.map(e => e.value));
    let coords = paths.map(p => p.map(e => e.coordinates));
    expect(values).toEqual([
        ['a', 'b', 'c', 'f', 'i'],
        ['a', 'b', 'e', 'f', 'i'],
        ['a', 'b', 'e', 'h', 'i'],
        ['a', 'd', 'e', 'f', 'i'],
        ['a', 'd', 'e', 'h', 'i'],
        ['a', 'd', 'g', 'h', 'i']]);
    expect(coords).toEqual([
        [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
        [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
        [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]],
        [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]
    ]);

    paths = findRoutes(A, 1, 2, 0, 1);
    values = paths.map(p => p.map(e => e.value));
    coords = paths.map(p => p.map(e => e.coordinates));
    expect(values).toEqual([['f']]);
    expect(coords).toEqual([[[1, 2]]]);
})