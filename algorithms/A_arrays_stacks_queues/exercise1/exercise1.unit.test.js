'use strict';
const getMaximum = require('./exercise1')


test('basic tests', () => {
    let array = [1, 0, 3, 5, 12, 35, 3, 5, 7, 12];
    let maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(35);

    array = [100, 0, 3, 5, 12, 35, 3, 5, 7, 12];
    maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(100);

    array = [1, 0, 3, 5, 12, 35, 3, 5, 7, 120];
    maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(120);
})

