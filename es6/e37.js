'use strict';
let strButton = document.getElementById('change-text');
let newTextArea = document.querySelector('.new-text');

let arrayN = document.getElementById('array');
let sumButton = document.getElementById('add-array');
let resultSumArea = document.querySelector('.array-sum');

String.prototype.exclamation = function(){
                                    let excStr = `${this}!`;
                                    return excStr;
                                    }
function add(...numbers){
    if (numbers.length === 0) return 0
    return numbers.reduce((a,b)=>a+b);
}

strButton.addEventListener('click', changeString)
sumButton.addEventListener('click', sumNumbers)

function changeString(){
    let originalText = document.getElementById('original-text').value;
    let newText = originalText.exclamation();
    newTextArea.textContent = newText;
}

function sumNumbers(){
    let strNumbers = document.getElementById('array').value;
    let arraySNumbs = strNumbers.split(',');
    let result,
        arrayNumbs;

    arraySNumbs = arraySNumbs.map( s => s.trim());
    arrayNumbs = arraySNumbs.map(n => parseInt(n, 10));
    result = add(...arrayNumbs);
    resultSumArea.textContent = result;
}
