'use strict'
const mergeArrays = require('./exercise6');

describe('Basic tests', () => {
    test('Higher value in the large array', () => {
        const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
        const smallArray = [0, 2, 4, 6, 8];
        const largeArraySize = largeArray.length;
        mergeArrays(largeArray, smallArray);
        expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(largeArraySize === largeArray.length).toBe(true);
    })
    test('Higher value in the small array', () => {
        const largeArray = [0, 2, 4, 6, 8].concat(new Array(5));
        const smallArray = [1, 3, 5, 7, 9];
        const largeArraySize = largeArray.length;
        mergeArrays(largeArray, smallArray);
        expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(largeArraySize === largeArray.length).toBe(true);
    })
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

    largeArray = [].concat(new Array(5));
    smallArray = [0, 2, 4, 6, 8];
    largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([0, 2, 4, 6, 8]);
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

test('Embedded array', () => {
    let largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    let smallArray = [0, 12, 13, 14, 15];
    let largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([0, 1, 3, 5, 7, 9, 12, 13, 14, 15]);
    expect(largeArraySize === largeArray.length).toBe(true);

    largeArray = [0, 12, 13, 14, 15].concat(new Array(3));
    smallArray = [1, 2, 3];
    largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([0, 1, 2, 3, 12, 13, 14, 15]);
    expect(largeArraySize === largeArray.length).toBe(true);
})

test('Already ordered', () => {
    let largeArray = [0, 1, 2, 3].concat(new Array(3));
    let smallArray = [4, 5, 6];
    let largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(largeArraySize === largeArray.length).toBe(true);

    largeArray = [0, 1, 2, 3].concat(new Array(3));
    smallArray = [-4, -3, -2];
    largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([-4, -3, -2, 0, 1, 2, 3]);
    expect(largeArraySize === largeArray.length).toBe(true);
})