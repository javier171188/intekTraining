'use strict';

let button = document.querySelector('#duplicate-button');

button.addEventListener('click', duplicateValues);

Array.prototype.duplicate = function(){ return this.concat(this)};

function duplicateValues(){
    let values = document.querySelector('#array-values').value;
    let array = values.split(',');
    let resultP = document.querySelector('.result');
    
    array = array.duplicate();
    resultP.textContent = `The duplicated array is: [${array}]`;
}

