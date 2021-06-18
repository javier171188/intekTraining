'use strict';

let button = document.querySelector('#intersect-button');

button.addEventListener('click',printIntersection);

function printIntersection(){
    let values1 = document.querySelector('#one').value;
    let values2 = document.querySelector('#two').value;
    let resultP = document.querySelector('.result');
    let array1 = values1.split(',');
    let array2 = values2.split(',');
    let filteredArray = array1.filter(value => array2.includes(value));
    resultP.textContent = `The intersection is: [${filteredArray}]`;
}