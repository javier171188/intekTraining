'use strict';
const { shuffleArray } = require('./exercise10');

test('Basic test', () => {
    const a = [1, 7, 9, 3, 5, 6, 8, 1, 2, 7, 0];
    shuffleArray(a);
    expect(a).not.toEqual([1, 7, 9, 3, 5, 6, 8, 1, 2, 7, 0]);
})

test('Controlled tests', () => {
    const a = [1, 7, 9, 3, 5];
    shuffleArray(a, 'seed');
    expect(a).toEqual([5, 7, 1, 3, 9]);

    const b = ['a', 'b', 'c', 'd'];
    shuffleArray(b, 1);
    expect(b).toEqual(['c', 'b', 'd', 'a']);
})

test('Small arrays', () => {
    let a = [];
    shuffleArray(a);
    expect(a).toEqual(a);

    a = [1];
    shuffleArray(a);
    expect(a).toEqual([1]);

    a = ['A', 'B'];
    shuffleArray(a, 1);
    expect(a).toEqual(['B', 'A']);
})