'use strict';
function getNodeAndBranches(tree) {
    tree = tree.slice(1, -1);
    let firstComaIndex = tree.indexOf(',');
    if (firstComaIndex < 0) {
        return [tree, '']
    }
    let root = tree.slice(0, firstComaIndex);
    let branches = tree.slice(firstComaIndex + 1);
    return [root, branches]
}

function getTrees(trees) {
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
    return branches;
}

function fromTreeToString(treeObj) {
    if (!treeObj) return '';
    if (!treeObj.value) return '';

    let branches = '';
    for (let branch of Object.keys(treeObj)) {
        branches += fromTreeToString(treeObj[branch]);
    }

    let treeStr = `(${treeObj.value}${branches ? `,${branches}` : ''})`;

    return treeStr;
}

let objTree = {
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

function isSameLevel(treeObj, number1, number2) {
    let tree = fromTreeToString(treeObj);

    number1 = String(number1);
    number2 = String(number2);

    var [nodes, branchesStr] = getNodeAndBranches(tree);
    var branches = getTrees(branchesStr);

    while (branches.length > 0) {
        nodes = branches.map(b => getNodeAndBranches(b)[0]);
        branches = branches.map(b => getNodeAndBranches(b)[1]);
        let newBranches = []
        branches.forEach(b => {
            newBranches = newBranches.concat(getTrees(b))
        });
        branches = newBranches;
        if (number1 === number2) {
            let count = nodes.filter(n => n === number1).length;
            if (count > 1) {
                return true;
            }
        } else {
            let bothAppear = (nodes.includes(number1) && nodes.includes(number2));
            if (bothAppear) {
                return true
            }
        }
    }
    return false;
}

module.exports = { isSameLevel };