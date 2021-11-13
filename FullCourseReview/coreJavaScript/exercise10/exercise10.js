'use strict'

const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

printTree('(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))');
//printTree('(B,(D),(E))', 'prefix');

function printTree(tree, order = 'infix') {
    tree = tree.replace(' ', '');
    tree = tree.slice(1, -1);

    let firstComaIndex = tree.indexOf(',');
    if (firstComaIndex < 0) {
        console.log(tree);
        return;
    }

    let root = tree.slice(0, firstComaIndex);
    let branches = tree.slice(firstComaIndex + 1);

    if (branches.length < 1) {
        console.log(root);
        return;
    }

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

    closingParIndex = parseInt(closingParIndex);
    let branch1;
    let branch2;
    if (closingParIndex === 0) {
        [branch1, branch2] = branches.split(',')
    } else {
        branch1 = branches.substring(0, closingParIndex + 1);
        branch2 = branches.slice(closingParIndex + 2);
    }

    /*console.log('root:', root);
    console.log('branches:', branches)
    console.log('branch 1', branch1);
    console.log('branch 2', branch2);
    console.log('#######################');*/
    if (order === 'prefix') {
        console.log(root);
        printTree(branch1, order);
        printTree(branch2, order);
    } else if (order === 'postfix') {
        printTree(branch1, order);
        printTree(branch2, order);
        console.log(root);
    } else {
        printTree(branch1, order);
        console.log(root);
        printTree(branch2, order);
    }
}

