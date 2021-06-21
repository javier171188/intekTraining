'use strict';
let button = document.getElementById('order-button');

button.addEventListener('click', orderArray);



function orderArray(){
    let strElements = document.getElementById('elements').value;
    let elemArray = strElements.split(',');
    let intArray = elemArray.map( n => parseInt(n));
    let result = document.querySelector('.new-array');
    let n = elemArray.length;   
    
    intArray = intArray.filter(n => n !== 0);
    
    while(intArray.length < n){
        intArray.push(0);
    }
    result.textContent = `The new array is: [${intArray}]`;
}