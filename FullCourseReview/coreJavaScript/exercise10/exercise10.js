'use strict';

//let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
let tree = ' (A,,) ';
//let infix = printTree(tree);

let goodSyntax = checkSyntax('');
console.log(goodSyntax);

function checkSyntax(tree) {
    if (tree.length < 1) return true;
    if (tree.length === 1) return false;

    if 
}


function printTree(tree, order = 'infix') {
    /*if (tree === '(AB,(C)') {
        throw new SyntaxError('Hi')
    }*/





    let transverse = '';

    function transverseTree(tree, order) {
        while (tree.includes(' ')) {
            tree = tree.replace(' ', '');
        }

        console.log(tree)
        tree = tree.slice(1, -1);
        console.log(tree)
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

//module.exports = { printTree };