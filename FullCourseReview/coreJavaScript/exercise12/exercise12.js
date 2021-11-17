'use strict';
function printTree(tree, order = 'infix') {
    let transverse = '';

    function transverseTree(tree, order) {
        while (tree.includes(' ')) {
            tree = tree.replace(' ', '');
        }
        tree = tree.slice(1, -1);

        let firstComaIndex = tree.indexOf(',');
        if (firstComaIndex < 0) {
            transverse += ',' + tree;
            return;
        }

        let root = tree.slice(0, firstComaIndex);
        let branches = tree.slice(firstComaIndex + 1);

        if (branches.length < 1) {
            transverse += ',' + root;
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

        if (order === 'prefix') {
            transverse += ',' + root;
            transverseTree(branch1, order);
            transverseTree(branch2, order);
        } else if (order === 'postfix') {
            transverseTree(branch1, order);
            transverseTree(branch2, order);
            transverse += ',' + root;
        } else {
            transverseTree(branch1, order);
            transverse += ',' + root;
            transverseTree(branch2, order);
        }
    }
    transverseTree(tree, order);
    return transverse.slice(1);
}

function isSymmetric(tree) {
    let traverseTree = printTree(tree);
    let traverseList = traverseTree.split(',');
    let reversedList = traverseList.reverse();
    let reversedTree = reversedList.join(',');
    return reversedTree === traverseTree;
}


module.exports = { isSymmetric };

