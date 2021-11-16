'use strict';
const { printTree } = require('./exercise10');

test('Basic tests', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

    let prefix = printTree(tree, 'prefix');
    expect(prefix).toEqual('A,B,D,E,C,F,H,I,G,,J');

    let infix = printTree(tree, 'infix');
    expect(infix).toEqual('D,B,E,A,H,F,I,C,,G,J');

    let postfix = printTree(tree, 'postfix');
    expect(postfix).toEqual('D,E,B,H,I,F,,J,G,C,A');
})

test('Default to infix', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let infix = printTree(tree);
    expect(infix).toEqual('D,B,E,A,H,F,I,C,,G,J');
})
