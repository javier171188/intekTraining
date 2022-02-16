'use strict';
//https://www.geeksforgeeks.org/rearrange-given-array-place/

function swapArray(array) {
    const size = array.length;

    for (let i = 0; i < size; i++) {
        console.log(array[array[i]], array[array[i]] % size);
        array[i] += (array[array[i]] % size) * size;
    }
    for (let i = 0; i < size; i++) {
        array[i] = Math.floor(array[i] / size);
    }
}

module.exports = { swapArray }