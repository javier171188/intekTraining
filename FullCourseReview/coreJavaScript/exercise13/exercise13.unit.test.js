'use strict';
const { isSameLevel } = require('./exercise13');

test('Basic tests', () => {
    let tree = {
        value: '0',
        branch1: {
            value: '1'
        },
        branch2: {
            value: '2',
            branch1: { value: '1' },
            branch2: {
                value: '5',
                branch1: { value: '3' },
                branch2: { value: '5', branch1: { value: '6' } },
                branch3: { value: '9' }
            }
        },
        branch3: { value: '3', branch1: { value: '0' } },
        branch4: { value: '5' },
        branch5: {
            value: '7',
            branch1: {
                value: '3',
                branch1: { value: '3' },
                branch2: {
                    value: '0',
                    branch1: { value: '9' },
                    branch2: { value: '4' }
                }
            }
        }
    }

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


    tree = {};
    expect(isSameLevel(tree, 2, 7)).toBe(false);
    expect(isSameLevel(tree, 10, 10)).toBe(false);

    tree = { value: 3 };
    expect(isSameLevel(tree, 2, 7)).toBe(false);
    expect(isSameLevel(tree, 10, 10)).toBe(false);

    tree = {
        value: 10,
        branch1: { value: 11, branch1: { value: 14 } },
        branch2: { value: 12, branch1: { value: 15 } },
        branch3: { value: 13 }
    }
    expect(isSameLevel(tree, 11, 12)).toBe(true);
    expect(isSameLevel(tree, 10, 13)).toBe(false);
    expect(isSameLevel(tree, 15, 14)).toBe(true);
})