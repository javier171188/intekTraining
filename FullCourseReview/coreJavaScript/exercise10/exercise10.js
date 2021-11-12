'use strict'

const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

`(A,
    (B,
        (D),
        (E)
    ),
    (C,
        (F,(H),(I)), 
        (G,,(J)))
 )`

printTree(bTree);


function printTree(tree, order = 'infix') {
    tree = tree.replace(' ', '');
    tree = tree.slice(1, -1);
    let firstComaIndex = tree.indexOf(',');
    let root = tree.slice(0, firstComaIndex);
    let branches = tree.slice(firstComaIndex + 1);

    let openParents = 0;
    let closingParIndex;


    let i;
    for (i in branches) {
        if (branches[i] === ')') {
            openParents -= 1;
        } else if (branches[i] === '(') {
            openParents += 1;
        }
        if (openParents === 0) {
            closingParIndex = i;
            break;
        }
    }
    let branch1 = branches.slice(0, closingParIndex + 1);
    let branch2 = branches.slice(closingParIndex + 1,);

    console.log(branch1, branch2);
}

