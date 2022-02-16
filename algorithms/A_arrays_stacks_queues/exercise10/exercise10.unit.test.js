'use strict';

const { shuffleArray } = require('./exercise10');

test('Basic test', () => {
    const a = [1, 7, 9, 3, 5];
    shuffleArray(a);
    expect(a).not.toEqual([1, 7, 9, 3, 5]);
})