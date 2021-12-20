let root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: {
                value: 5,
                left: {},
                right: {}
            },
            right: null
        }
    },
    right: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: {
                value: 5,
                left: null,
                right: null
            }
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    }
}

let rootStr = '(1,(2,(3,,),(4,(5,,),)),(2,(4,,(5,,)),(3,,)))';

function fromTreeToString(treeObj) {
    if (!treeObj) return '';
    if (!treeObj.value) return '';

    let treeStr = `(${treeObj.value},${fromTreeToString(treeObj.left)},${fromTreeToString(treeObj.right)})`;
    return treeStr;
}

console.log(fromTreeToString(root))