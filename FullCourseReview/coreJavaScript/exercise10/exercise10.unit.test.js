'use strict';
const { printTree } = require('./exercise10');

test('Basic tests', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

    let prefix = printTree(tree, 'prefix');
    expect(prefix).toEqual('A,B,D,E,C,F,H,I,G,J');

    let infix = printTree(tree, 'infix');
    expect(infix).toEqual('D,B,E,A,H,F,I,C,G,J');

    let postfix = printTree(tree, 'postfix');
    expect(postfix).toEqual('D,E,B,H,I,F,J,G,C,A');
})

test('Default to infix', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let infix = printTree(tree);
    expect(infix).toEqual('D,B,E,A,H,F,I,C,G,J');
})

test('Reject invalid syntax', () => {
    let tree = '(AB,(C)';

    expect(() => printTree(tree)).toThrow(SyntaxError);
    expect(() => printTree(tree)).toThrow("The three syntax is not correct.");

    tree = '(A))';
    expect(() => printTree(tree)).toThrow(SyntaxError);
    expect(() => printTree(tree)).toThrow("The three syntax is not correct.");

    tree = '(A,(B),(C),(D))';
    expect(() => printTree(tree)).toThrow(SyntaxError);
    expect(() => printTree(tree)).toThrow("The three syntax is not correct.");

    tree = '(A,,,)';
    expect(() => printTree(tree)).toThrow(SyntaxError);
    expect(() => printTree(tree)).toThrow("The three syntax is not correct.");
})

test('Accept equivalent syntax', () => {
    let tree = '(A)';
    let transverse = printTree(tree);
    expect(transverse).toEqual('A');

    tree = '(A,)';
    transverse = printTree(tree);
    expect(transverse).toEqual('A');

    tree = '(A,,)';
    transverse = printTree(tree);
    expect(transverse).toEqual('A');

    let rootStr = '(1,(2,(3,,),(4,(5,,),)),(2,(4,,(5,,)),(3,,)))';
    transverse = printTree(rootStr);
    expect(transverse).toEqual('3,2,5,4,1,4,5,2,3');
})