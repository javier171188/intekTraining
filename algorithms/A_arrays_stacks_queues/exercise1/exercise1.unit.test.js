'use strict';
const getMaximum = require('./exercise1')


test('basic test', () => {
    let array = [1, 0, 3, 5, 12, 35, 3, 5, 7, 12];
    let maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(35);


})

test('Maximum in the edges', () => {
    let array = [100, 0, 3, 5, 12, 35, 3, 5, 7, 12];
    let maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(100);

    array = [1, 0, 3, 5, 12, 35, 3, 5, 7, 120];
    maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(120);
})

test('Several maximums', () => {
    let array = [10, 0, 35, 5, 12, 35, 3, 5, 35, 12];
    let maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(35);

    array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(0);
})

test('Empty array', () => {
    let array = [];
    let maxNumber = getMaximum(array);
    expect(maxNumber).toEqual(undefined);

})