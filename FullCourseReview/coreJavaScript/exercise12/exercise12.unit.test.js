'use strict';

const { isSymmetric } = require("./exercise12");

test('Basic tests', () => {
    let noSymmetricTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let symmetricTree = '(1, (2,(3),(4,(5),)), (2,(4,,(5)),(3)))';

    let symmetric = isSymmetric(symmetricTree);
    expect(symmetric).toBe(true);

    let noSymmetric = isSymmetric(noSymmetricTree);
    expect(noSymmetric).toBe(false);
})

test('Simple trees', () => {
    let emptyTree = '';
    let empty = isSymmetric(emptyTree);
    expect(empty).toBe(true);

    let emptyParsTree = '()';
    let emptyPars = isSymmetric(emptyParsTree);
    expect(emptyPars).toBe(true);

    let oneNodeTree = '(A)';
    let oneNode = isSymmetric(oneNodeTree);
    expect(oneNode).toBe(true);

    let oneNodeTreeS = 'A';
    let oneNodeS = isSymmetric(oneNodeTreeS);
    expect(oneNodeS).toBe(true);
})

test('Symmetric trees', () => {
    let tree = '(A, (B), (B))'
    let symmetric = isSymmetric(tree);
    expect(symmetric).toBe(true);

    tree = '(A, (B,(C),(D)), (B, (D),(C)))';
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(true);

    tree = '(A, (B,(C,(E),(F)),(D,(G),(H))), (B, (D, (H), (G)),(C, (F), (E))))';
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(true);
})

test('No symmetric trees', () => {
    let tree = '(A, (B), (C))'
    let symmetric = isSymmetric(tree);
    expect(symmetric).toBe(false);

    tree = '(A, (B,(C),(D)), (B, (C),(D)))';
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(false);

    tree = '(A, (B,(C,(F),(E)),(D,(G),(H))), (B, (D, (H), (G)),(C, (F), (E))))';
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(false);
})
