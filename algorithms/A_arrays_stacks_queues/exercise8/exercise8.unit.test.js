'use strict';

const { sumArrays } = require('./exercise8');

test('Basic tests', () => {
    let a = [9, 9];
    let b = [1];
    let o = sumArrays(a, b);
    expect(o).toEqual([1, 0, 0]);

    b = [9, 9];
    a = [1];
    o = sumArrays(a, b);
    expect(o).toEqual([1, 0, 0]);

    a = [1, 2, 3, 4, 5, 6, 7];
    b = [8, 9, 1, 2];
    o = sumArrays(a, b);
    expect(o).toEqual([1, 2, 4, 3, 4, 7, 9]);

    b = [0]
    o = sumArrays(a, b);
    expect(o).toEqual([1, 2, 3, 4, 5, 6, 7])

    a = [0];
    o = sumArrays(a, b);
    expect(o).toEqual([0]);

    a = [7];
    b = [2];
    o = sumArrays(a, b);
    expect(o).toEqual([9]);

    a = [1, 2, 3, 4];
    b = [8, 7, 6, 5];
    o = sumArrays(a, b);
    expect(o).toEqual([9, 9, 9, 9]);

    a = [9, 9, 9, 9, 9, 9, 9, 9];
    b = [0, 2];
    o = sumArrays(a, b);
    expect(o).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 1]);
})