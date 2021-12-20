'use strict';

function checkSyntax(tree) {
    if (tree.length < 1) return true;
    if (tree.length === 1) return false;
    if (tree[0] !== '(' || tree[tree.length - 1] !== ')') return false
    let noParents = tree.slice(1, -1);
    let root = noParents.split(',')[0];

    if (root.includes(')') || root.includes('(')) return false

    return true;
}

function printTree(tree, order = 'infix') {

    let transverse = '';
    function transverseTree(tree, order) {

        let correctSyntax = checkSyntax(tree);

        if (!correctSyntax) {
            throw new SyntaxError('The three syntax is not correct.')
        }

        tree = tree.slice(1, -1);

        if (!tree.includes('(')) {
            let elements = tree.split(',');
            if (elements.length > 3) throw new SyntaxError('The three syntax is not correct.');
            tree = elements[0];
        }

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
            if (branch1 === '') {
                branch2 = branches.slice(1);
            }
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

    while (tree.includes(' ')) {
        tree = tree.replace(' ', '');
    }

    transverseTree(tree, order);
    transverse = transverse.slice(1);

    if (transverse.startsWith(',') || transverse.endsWith(',')) {
        throw new SyntaxError('The three syntax is not correct.')
    }


    while (transverse.includes(',,')) {
        transverse = transverse.replace(',,', ',');
    }
    return transverse
}

module.exports = { printTree };