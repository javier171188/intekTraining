'use strict';

function displayNumbers() {
    let numbers = [...Array(101).keys()];
    numbers = numbers.slice(1);
    console.log(numbers.join(' '));
}

displayNumbers();

module.exports = displayNumbers;