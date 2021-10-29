'use strict'
const mergeArrays = require('./exercise4');

test('Basic test', () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(largeArraySize === largeArray.length).toBe(true);
})


test('Empty arrays', () => {
    let largeArray = [1, 3, 5, 7, 9]
    let smallArray = [];
    let largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 3, 5, 7, 9]);
    expect(largeArraySize === largeArray.length).toBe(true);

    largeArray = [];
    smallArray = [];
    largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([]);
    expect(largeArraySize === largeArray.length).toBe(true);

})

test('Same array', () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [1, 3, 5, 7, 9];
    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 1, 3, 3, 5, 5, 7, 7, 9, 9]);
    expect(largeArraySize === largeArray.length).toBe(true);
})