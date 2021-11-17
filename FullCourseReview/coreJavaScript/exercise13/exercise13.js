'use strict';

let tree = `(0, 
    (1), 
    (2, 
        (1),
        (5, 
            (3),
            (5,
                (6)), 
            (9))),
    (3,  
        (0)),
    (5), 
    (7, 
        (3, 
            (3), 
            (0, 
                (9), 
                (4)))))`;

tree = `(0,(1),(2, (1),(5, (3),(5,(6)), (9))),(3, (0)),(5),(7, (3, (3), (0, (9), (4)))))`;
tree = '(A, (B, (D),(E)), (C,(F), (G)))';
tree = '(B,(D),(E)),(C,(F),(G))';
tree = '(D),(E),(F),(G)';

getTrees(tree);
function getTrees(trees) {
    // This should not be necessary when called inside isSameLevel function
    while (trees.includes(' ')) {
        trees = trees.replace(' ', '');
    }

    let openParents = 0;
    let openParIndex = 0;
    let branches = [];

    let i;
    for (i in trees) {
        if (trees[i] === ')') {
            openParents -= 1;
        } else if (trees[i] === '(') {
            openParents += 1;
        }
        if (openParents === 0) {
            branches.push(trees.slice(openParIndex, parseInt(i) + 1));
            openParIndex = parseInt(i) + 1;
        }
    }
    branches = branches.filter(b => b !== ',');
    console.log(branches);
}

function isSameLevel(tree, number1, number2) {
    while (tree.includes(' ')) {
        tree = tree.replace(' ', '');
    }

    tree = tree.slice(1, -1);

    let firstComaIndex = tree.indexOf(',');
    if (firstComaIndex < 0) {
        return false;
    }

    let root = tree.slice(0, firstComaIndex);
    let branches = tree.slice(firstComaIndex + 1);


    if (branches.length < 1) {
        return false;
    }



    let deeps = {};
    if (number1 === number2) {

    }
}