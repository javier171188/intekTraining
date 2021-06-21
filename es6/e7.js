'use strict';

let button = document.getElementById('max-button');
button.addEventListener('click', getMax)

function getMax(){
    let strNumbers = document.querySelector('.text').value;
    let resultP = document.querySelector('.result');
    let numbers = strNumbers.split(',');
    let intNumbers = numbers.map((n)=> parseInt(n));
    let maxNumber = Math.max(...intNumbers);
    resultP.textContent = maxNumber;
}