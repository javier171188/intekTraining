'use strict';
let inputArea = document.getElementById('array-text');
let getButton = document.getElementById('get-button');
let resultArea = document.querySelector('.result');

getButton.addEventListener('click', getArrays);

function getArrays(){
    let sInpArray = inputArea.value.split(',');
    let inpArray = sInpArray.map( s => parseFloat(s));
    
    let zeroTrips = findNumbers(inpArray);
    if (zeroTrips.length === 0){
        resultArea.textContent = 'No combinations found.'
    }else{
        resultArea.textContent = 'The combinations are:'
        for (let c of zeroTrips){
            let p = document.createElement('p');
            p.textContent = `[${c}]`;
            resultArea.appendChild(p);
        }
    }
}




function findNumbers(array){
    let zeroSums = [];
    for (let i = 0; i < array.length-2; i++){
        for (let j= i+1; j < array.length-1; j++){
            for (let k = j+1; k<array.length; k++){
                if(array[i] + array[j] + array[k] === 0){
                    zeroSums.push([array[i], array[j], array[k]]);
                }
            }
        }
    }
    return zeroSums;
}
