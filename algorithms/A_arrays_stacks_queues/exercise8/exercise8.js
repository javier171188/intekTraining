'use strict';

// const a = [0];
// const b = [0];
// const o = sumArrays(a, b);
// console.log(o);

function sumArrays(array1, array2) {
    let string1 = array1.join('');
    let number1 = parseInt(string1);

    let string2 = array2.join('');
    let number2 = parseInt(string2);

    let totalInt = number1 + number2;
    let totalStr = String(totalInt);
    let totalArray = Array.from(totalStr);
    return totalArray.map(x => parseInt(x));
}

module.exports = { sumArrays };