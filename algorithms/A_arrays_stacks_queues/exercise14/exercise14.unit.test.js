'use strict'
const { findRoutes } = require('./exercise14')

test('Basic test', () => {
    const A = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ]

    const paths = findRoutes(A);

    expect(paths).toEqual([
        [
            { coordinates: [Array], value: 'a' },
            { coordinates: [Array], value: 'b' },
            { coordinates: [Array], value: 'c' },
            { coordinates: [Array], value: 'f' },
            { coordinates: [Array], value: 'i' }
        ],
    ])
})