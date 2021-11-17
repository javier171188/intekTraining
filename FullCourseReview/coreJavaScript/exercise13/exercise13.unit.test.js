'use strict';
const { isSameLevel } = require('./exercise13');


test('Basic tests', () => {
    let tree = `(0,(1),(2, (1),(5, (3),(5,(6)), (9))),(3, (0)),(5),(7, (3, (3), (0, (9), (4)))))`;

    expect(isSameLevel(tree, 1, 1)).toBe(false);
    expect(isSameLevel(tree, 3, 3)).toBe(true);
    expect(isSameLevel(tree, 0, 0)).toBe(false);
    expect(isSameLevel(tree, 6, 4)).toBe(true);
    expect(isSameLevel(tree, 9, 1)).toBe(false);
    expect(isSameLevel(tree, 2, 7)).toBe(true);
    expect(isSameLevel(tree, 7, 2)).toBe(true);
})

test('Simple trees', () => {
    let tree = '';
    expect(isSameLevel(tree, 2, 7)).toBe(false);
    expect(isSameLevel(tree, 10, 10)).toBe(false);

    tree = '2';
    expect(isSameLevel(tree, 2, 7)).toBe(false);
    expect(isSameLevel(tree, 10, 10)).toBe(false);

    tree = '(3)';
    expect(isSameLevel(tree, 2, 7)).toBe(false);
    expect(isSameLevel(tree, 10, 10)).toBe(false);

    tree = '(10, (11, (14)), (12,(15)), (13))';
    expect(isSameLevel(tree, 11, 12)).toBe(true);
    expect(isSameLevel(tree, 10, 13)).toBe(false);
    expect(isSameLevel(tree, 15, 14)).toBe(true);
})