'use strict'
const { flattenArrayR, flattenArrayI } = require('./exercise13');

test('Basic tests', () => {
    const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]]

    let recFlat = flattenArrayR(input);
    let iteFlat = flattenArrayI(input);

    expect(recFlat).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(iteFlat).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})

test('Small arrays', () => {
    const input = []

    let recFlat = flattenArrayR(input);
    let iteFlat = flattenArrayI(input);

    expect(recFlat).toEqual([]);
    expect(iteFlat).toEqual([]);


    const oneE = ['a'];
    recFlat = flattenArrayR(oneE);
    iteFlat = flattenArrayI(oneE);

    expect(recFlat).toEqual(oneE);
    expect(iteFlat).toEqual(oneE);

    const twoE = ['a', 'b'];

    recFlat = flattenArrayR(twoE);
    iteFlat = flattenArrayI(twoE);

    expect(recFlat).toEqual(twoE);
    expect(iteFlat).toEqual(twoE);

    const deep = [[[[[[[[[[[[[[['s']]]]]]]]]]]]]]];
    recFlat = flattenArrayR(deep);
    iteFlat = flattenArrayI(deep);

    expect(recFlat).toEqual(['s']);
    expect(iteFlat).toEqual(['s']);

})

test('Already flat', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let recFlat = flattenArrayR(input);
    let iteFlat = flattenArrayI(input);

    expect(recFlat).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(iteFlat).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})

