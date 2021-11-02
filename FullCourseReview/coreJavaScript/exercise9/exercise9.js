'use strict'
const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]]

function flattenArrayR(input) {
    let flatArray = [];
    for (let e of input) {
        if (Array.isArray(e)) {
            flatArray = flatArray.concat(flattenArrayR(e));
        } else {
            flatArray.push(e);
        }
    }
    return flatArray;
}

function flattenArrayI(input) {
    let noFlat = [...input];
    let flatArray = [];
    while (noFlat.length > 0) {
        let e = noFlat[0];
        if (Array.isArray(e)) {
            noFlat = [...e].concat(noFlat.slice(1));
        } else {
            flatArray.push(e);
            noFlat = noFlat.slice(1);
        }
    }
    return flatArray;
}

console.log(flattenArrayI(input));
